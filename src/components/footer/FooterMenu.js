import React from 'react';
import { Grid } from 'semantic-ui-react';
import FooterSubMenu from './FooterSubMenu';
import SubscribeMenu from './SubscribeMenu';

// Footer Submenu Text Data 底部子菜单显示文本的数据
const dataFooterMenu = [
  {
    menuHeader: 'shop',
    menuItems: [
      {
        link: 'ladies',
        path: '/ladies'
      },
      {
        link: 'men',
        path: '/men'
      },
      {
        link: 'kids',
        path: '/kids'
      },
      {
        link: 'home',
        path: '/'
      }
    ]
  },
  {
    menuHeader: 'carporate info',
    menuItems: [
      {
        link: 'career-at-igo',
        path: '/'
      },
      {
        link: 'about-igo',
        path: '/'
      },
      {
        link: 'sustainability',
        path: '/'
      },
      {
        link: 'press',
        path: '/'
      },
      {
        link: 'investor-relations',
        path: '/'
      },
      {
        link: 'corporate-governance',
        path: '/'
      }
    ]
  },
  {
    menuHeader: 'help',
    menuItems: [
      {
        link: 'customer-service',
        path: '/'
      },
      {
        link: 'my-igo',
        path: ''
      },
      {
        link: 'store-locator',
        path: '/'
      },
      {
        link: 'legal&privacy',
        path: '/'
      },
      {
        link: 'contact',
        path: '/'
      }
    ]
  }
]

const FootMenu = (props) => {
  let itemsSubMenu = dataFooterMenu.map(function(item,index){
    return(
      <Grid.Column key={index}>
        <FooterSubMenu {...item}/>
      </Grid.Column>
    )
  })

  return(
    <div className="footer-menu">
        <Grid columns='four' divided>
          <Grid.Row>
            {itemsSubMenu}
            <SubscribeMenu/>
          </Grid.Row>
        </Grid>
    </div>
  )
}

export default FootMenu;