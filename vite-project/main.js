import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import '@ui5/webcomponents/dist/Button.js'
import '@ui5/webcomponents/dist/Input.js';
import '@ui5/webcomponents/dist/CheckBox.js';

import "@ui5/webcomponents/dist/TabContainer";
import "@ui5/webcomponents/dist/Tab";
import '@ui5/webcomponents/dist/Panel.js';
import '@ui5/webcomponents/dist/Icon';
import "@ui5/webcomponents-icons/dist/employee.js";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import "@ui5/webcomponents-icons-tnt/dist/antenna.js"
import "@ui5/webcomponents-icons-tnt/dist/satellite"
import "@ui5/webcomponents-icons-tnt/dist/application"
import "@ui5/webcomponents/dist/Label.js";
import "@ui5/webcomponents/dist/Carousel.js";
import "@ui5/webcomponents/dist/AvatarGroup.js";
import "@ui5/webcomponents/dist/TimePicker.js";




document.querySelector('#app').innerHTML = `
<style>
    .container{
    
        width: 100%;
        height: 100%;
    }    
    .menubar {
        height: 1%;        
        border: 1px solid black;
        padding-top: 8px;
        padding-right: 185px;
        padding-bottom: 4px;
        padding-left: 3px;
    }
    .avatar{
      height: 1%;   
      padding-top: 8px;
      padding-right: 1px;
      padding-bottom: 4px;
      padding-left: 1100px;
    }
    .main {
          
        background-color: beige;
    }
   
    
    .footer {
        height: 5%;
        background-color: darkgrey;
        border: 1px;
        padding-top: 50px;
        padding-right: 30px;
        padding-bottom: 50px;
        padding-left: 80px;
    }
    
     
    }
</style>


<!DOCTYPE html>
<html>

<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Page 1</title>
</head>

<body>

<div>
    <div class="container">
      <div class="menubar">
        <ui5-bar design="Header">
          <ui5-tabcontainer fixed collapsed>
            <ui5-tab icon="activities" text="Home" value = 0 ></ui5-tab>
            <ui5-tab icon="employee" text="What's new" selected value = 1 ></ui5-tab>
            <ui5-tab icon= "tnt/antenna" text="Who are we" value = 2></ui5-tab>
            <ui5-tab icon="tnt/application" text="About" value = 3></ui5-tab>
            <ui5-tab icon="tnt/satellite" text="Contacts" value = 4></ui5-tab>
          </ui5-tabcontainer>
        </ui5-bar>  
        <ui5-avatar-group class= "avatar"><ui5-avatar size="xs">
        <img class="rund" src="../src/avatar.jpg" alt="Woman Avatar 5">
        </ui5-avatar>  </ui5-avatar-group>
      </div>
      </div>

        <div class="main" >
 <ui5-panel header-text="" value=1>
    <h3 class="content-color">I am learning UI5!</h3>
    <br>
    <div>
    <body xmlns="http://www.w3.org/1999/xhtml">
  <ui5-carousel cyclic="" data-sap-ui-fastnavgroup="true">
    <img src="../src/image1.jpg" alt="Landscape 1" slot="default-1"/>
    <img
      src="../src/image2.jpg"
      alt="Landscape 2"
      slot="default-2"
    />
    <img src="../src/image3.jpg" alt="Bulb" slot="default-3" />
  </ui5-carousel>
</body>
</div>

     <p class="content-color">Aute ullamco officia fugiat culpa do tempor tempor aute excepteur magna.
        Quis velit adipisicing excepteur do eu duis elit. Sunt ea pariatur nulla est laborum proident sunt labore
        commodo Lorem laboris nisi Lorem.
    </p>
</ui5-panel>
        </div>




    </div>

</body>
<div class="footer"> © copyright  Paul lewa</div>

</html>
`








/*
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
* {
  box-sizing: border-box;
}

.menu {
  float: left;
  width: 20%;
  text-align: center;
}

.menu a {
  background-color: #e5e5e5;
  padding: 8px;
  margin-top: 7px;
  display: block;
  width: 100%;
  color: black;
}

.main {
  float: left;
  width: 60%;
  padding: 0 20px;
}

.right {
  background-color: #e5e5e5;
  float: left;
  width: 20%;
  padding: 15px;
  margin-top: 7px;
  text-align: center;
}
.avatar{
  padding: 0px 10px 15px 50px;
}
.menubar{
  
  
}
.rund {
  border-radius: 100%;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  }

@media only screen and (max-width: 620px) {
  /* For mobile phones: */
/*
  .menu, .main, .right {
    width: 100%;
  }
}
</style>
</head>
<body style="font-family:Verdana;color:#aaaaaa;">

<div style="background-color:#e5e5e5;padding:15px;text-align:center;">
<div class ="menubar">
<ui5-bar design="Header">
<ui5-tabcontainer fixed collapsed>
    <ui5-tab icon="activities" text="Home" value = 0 ></ui5-tab>
<ui5-tab icon="employee" text="What's new" selected value = 1 ></ui5-tab>
<ui5-tab icon= "tnt/antenna" text="Who are we" value = 2></ui5-tab>
<ui5-tab icon="tnt/application" text="About" value = 3></ui5-tab>
<ui5-tab icon="tnt/satellite" text="Contacts" value = 4></ui5-tab>
</ui5-tabcontainer>
</ui5-bar>
</div>

  </div>
  
</div>

<div style="overflow:auto">
  <div class="menu">
    <a href="https://vitejs.dev/guide/assets.html" id="Delete"  > Vite Site</a>
    <a href="#vite-project/public/product.html" id ="Insert" "> Product information</a>
    <a href="#" id="Update" >Link 3</a>
    <a href="#">Link 4</a>
  </div>

  <div class="main">
    <h2>Lorum Ipsum</h2>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
  </div>

  <div class="right">
    <h2>Timer</h2>
    <ui5-time-picker>
    </ui5-time-picker>
  </div>
</div>

<div style="background-color:#e5e5e5;text-align:center;padding:10px;margin-top:7px;">© copyright w3schools.com</div>

</body>
</html>

*/