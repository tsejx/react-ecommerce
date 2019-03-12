import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScreenWrapper from '@components/ScreenWrapper';
import { noop, scrollTo, determineRoot } from '@utils';
import './index.scss';

// 滚动时间
const SCROLLTIME = 400;
// 滚轮灵敏度
const SCROLL_SENSITIVITY = 5;
// 手势灵敏度
const TOUCH_SENSITIVITY = 5;
// 超时时间
const TIMEOUT = 600;

class FullPage extends Component {
	constructor(props) {
		super(props);

		const length = props.screens.length || 0;

		this.state = {
			active: 0,
			isScrollPending: false,
			screenLength: length,
			horizontalAxis: [],
			verticalAxis: [],
		};

		// DOM节点
		this.dom = null;
		// 根据浏览器获取根节点
		this.wrapperRoot = determineRoot();

		[
			'initEventListener',
			'handleMouseWheel',
			'handleTouchMove',
			'handleTouchEnd',
			'handleKeyboardEvent',
			'handleVerticalScroll',
			'handleScroll',
			'onSideNavChange',
			'renderChildren',
		].forEach(fn => (this[fn] = this[fn].bind(this)));
	}
	componentDidMount() {
		this.hideScrollBar();

		this.initEventListener();

		// 初始化页面
		this.handleScroll(this.wrapperRoot, 0, {});

		// const docHeight = this.dom.getBoundingClientRect().height;

		// TODO: 移动端问题 css 属性 touch-action/touchAction
		// this.target.style.touchAction = 'manipulation'
	}
	// 隐藏滚动条
	hideScrollBar() {
		document.documentElement.style.overflow = 'hidden';
		document.body.style.overflow = 'hidden';
	}
	// 显示滚动条
	showScrollBar() {
		document.documentElement.style.overflow = 'auto';
		document.body.style.overflow = 'auto';
	}
	initEventListener() {
		// 鼠标滚轮事件
		window.addEventListener('mousewheel', this.handleMouseWheel);
		// 键盘事件
		window.addEventListener('keydown', this.handleKeyboardEvent);
		// 手势事件
		window.addEventListener('touchmove', this.handleTouchMove);
		window.addEventListener('touchend', this.handleTouchEnd);
	}
	// 滚轮事件处理
	handleMouseWheel(e) {
		// 取消浏览器默认滚动时间
		e.preventDefault();

		// TODO:解决页面切换过程中，多次触发事件仍会在切换完成后，完成多余的页面切换
		// 正在切换页面时不进行多余的滚动事件处理
		if (this.state.isScrollPending) return;

		// TODO: 考虑 e.wheelDelta 的兼容性
		const direction = e.wheelDelta > 0 ? 'UP' : 'DOWN';

		const x = e.deltaX;
		const y = e.deltaY;

		// TODO: 考虑 setState 的先后问题
		this.updateScrollCoordinate(x, y);

		this.invokeScrollEvent(fulfilled => {
			// 非切换中才执行
			if (!fulfilled) {
				return;
			}

			this.lockout();

			this.handleVerticalScroll(direction);

			this.unLockout();
		});
	}

	invokeScrollEvent(callback) {
		const { horizontalAxis, verticalAxis } = this.state;

		const canInvokeScroll =
			horizontalAxis.length > SCROLL_SENSITIVITY && verticalAxis.length > SCROLL_SENSITIVITY;

		if (canInvokeScroll) {
			this.resetScroll();

			this.setState(
				{
					isScrollPending: true,
				},
				() => {
					callback(this.state.isScrollPending);
				}
			);
		}
	}

	handleVerticalScroll(direction) {
		const { active, screenLength } = this.state;

		// 下一个页面标识
		const next = direction === 'DOWN' ? active + 1 : active - 1;

		if (next < 0 || next > screenLength - 1) return this.formatScrollEvent();

		// TODO: 使用 window.innerHeight 计算高度存在bug
		// 下一个页面窗口内层高度
		const to = next * window.innerHeight;

		// 更新状态
		const newState = {
			active: next,
		};

		this.handleScroll(this.wrapperRoot, to, newState);
	}
	// 键盘事件处理
	handleKeyboardEvent(e) {
		const keys = {
			38: 'UP',
			40: 'DOWN',
		};

		// 移动方向
		const direction = keys[e.keyCode];

		if (!direction) return;

		// 根据移动方向得出对当前页面标识进行加减一个单位
		const intent = direction === 'UP' ? -1 : 1;

		// 切换页面：参数是将要切换到的那个页面的 数字标识
		this.handleKeyboardScroll(this.state.active + intent);
	}

	isEligible(index) {
		const { active, screenLength, isScrollPending } = this.state;

		// 页面切换中
		if (isScrollPending) {
			return false;
		}
		// 当前页面和将要切换页面相同
		if (active === index) {
			return false;
		}
		if (index > screenLength - 1 || index < 0) {
			return false;
		}
		return true;
	}

	handleKeyboardScroll(index) {
		const { wrapperRoot } = this;

		// 检测合理性
		const eligible = this.isEligible(index);

		if (!eligible) {
			return;
		}

		const newState = {
			active: index,
		};

		const to = index * window.innerHeight;

		this.handleScroll(wrapperRoot, to, newState);
	}

	handleScroll(node, to, newState, callback = noop) {
		this.refresh();
		newState.isScrollPending = true;
		this.setState(newState, () => {
			scrollTo(node, to, SCROLLTIME, () => {
				callback();
				this.formatScrollEvent();
			});
		});
	}

	// 手势事件处理
	handleTouchMove(e) {}
	handleTouchEnd(e) {}

	refresh() {
		this.resetScroll();
		this.resetTouches();
	}

	formatScrollEvent() {
		this.refresh();
		this.setState({ isScrollPending: false });
	}

	resetScroll() {
		this.setState({ horizontalAxis: [], verticalAxis: [] });
	}

	resetTouches() {}

	updateScrollCoordinate(newX, newY) {
		if (this.state.isScrollPending) return;
		this.setState(prevState => ({
			horizontalAxis: [...prevState.horizontalAxis, newX],
			verticalAxis: [...prevState.verticalAxis, newY],
		}));
	}

	updateTouchCoordinate(newX, newY) {}

	lockout() {
		this.originalAddScrollCoordinate = this.updateScrollCoordinate;
		// this.originalAddTouchCoordinate = this.updateTouchCoordinate;

		this.updateScrollCoordinate = noop;
		// this.updateTouchCoordinate = noop;
	}

	unLockout() {
		this.updateScrollCoordinate = this.originalAddScrollCoordinate;
		// this.updateTouchCoordinate = this.orginalAddTouchCoordinate;
	}

	onSideNavChange(next) {
		const { active } = this.state;

		if (active === next) return;

		const to = next * window.innerHeight;

		const newState = { active: next };

		this.handleScroll(this.wrapperRoot, to, newState);
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (
			nextState.isScrollPending !== this.state.isScrollPending ||
			nextState.active !== this.state.active
		) {
			return true;
		}
		return false;
	}

	componentWillUnmount() {
		if (window && window.removeEventListener) {
			window.removeEventListener('wheel', this.handleMouseWheel, false);
			window.removeEventListener('keydown', this.handleKeyboardEvent);
			window.removeEventListener('touchmove', this.handleTouchMove);
			window.removeEventListener('touchend', this.handleTouchEnd);
		}
	}

	renderChildren(props = {}) {
		return React.Children.map(this.props.children, (child, index) => {
			return React.cloneElement(child, { ...props });
		});
	}

	render() {
		const { renderChildren } = this;

		const { active } = this.state;

		const { screens } = this.props;

		return (
			<div
				className="full-page"
				style={{ overflow: 'hidden' }}
				ref={dom => {
					this.dom = dom;
				}}
			>
				{renderChildren({
					active: this.state.active,
					dataList: this.props.screens.map(item => item.name),
					onChange: this.onSideNavChange,
				})}

				{screens.map(item => {
					return (
						<ScreenWrapper
							key={item.name}
							active={active}
							reference={this.wrapperRoot}
							className={item.name}
						>
							{item.component}
						</ScreenWrapper>
					)
				})}
			</div>
		);
	}
}

FullPage.defaultProps = {};

FullPage.propTypes = {
	screens: PropTypes.arrayOf((propValue, key) => {
		if (typeof propValue[key].name !== 'string') {
			throw new Error('the name of screens must be string');
		}
	}),
};

export default FullPage;
