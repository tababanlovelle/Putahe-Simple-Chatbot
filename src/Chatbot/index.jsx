import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";


const orders = [];

const CHATBOT_THEME = {
  background: "radial-gradient(circle, rgba(251,190,174,1) 0%, rgba(255,113,0,1) 100%);",
  fontFamily: "Poppins",
  headerBgColor: "#ffff",
  headerFontColor: "#d4320e",
  headerFontSize: "20px",
  botBubbleColor: "#d8d8d8",
  botFontColor: "black",
  userBubbleColor: "#e2e2e2",
  userFontColor: "#000"
};

//eto yung pag print ng order hahehehehe
function Summary() {
  return (
  <div style={{ width: '100%' }}>
        <h6><b>Summary of Orders</b></h6>
        <table>
          <tbody>
            {orders.map((item, index) => (
            <tr key={index}>
              <td>{item}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
}
Summary.propTypes = {
  steps: PropTypes.object,
};

Summary.defaultProps = {
  steps: undefined,
};

const add = (value) => {
  orders.push(value);
}
var i =1;
function ChatBotHelper(props) {
  const botAvatar = 'logo.png';
  const avatarStyle = { width: '50px', height: '50px' };
  const steps = [
          {
            id: "greet",
            message: "Mabuhay! 😄Welcome to PutaHe — kung saan mapapasabi ka ng “Mura’t Masarap”.😋",
            trigger: "order"
          },
          {
            id: "order",
            message: "Do you want to check out our Putahes?",
            trigger: "choice1"
          },
          {
            id: "choice1",
            options: [
              { value: "Yes", label: "✅Yes, please", trigger: "showMenu" },
              { value: "No", label: "❌No, thank you", trigger: "update1" }
            ]
          },
          {
            id: "showMenu",
            message: "Choose from the different meals below:",
            trigger: () => {
                add('\n\nMeal #' + i +": ");
                i++;
                return "menu";}
          },
          {
            id: "menu",
            options: [
              { value: "Burger", label: "🍔Burger Meal", trigger: () => {
                add('Burger Meal');
                return "snack"
              } },
              { value: "Pasta", label: "🍝Pasta Meal", trigger: () => {
                add('Pasta Meal');
                return "snack";
              } },
              { value: "Chicken", label: "🍗Chicken Meal", trigger: () => {
                add('Chicken Meal');
                return "addSundae"; }
            },
          ]},
          {
            id: "snack",
            message: "Choose your a snack:",
            trigger: "snackChoice"
          },
          {
            id: "snackChoice",
            options: [
              { value: "Fries", label: "🍟Fries", trigger: "friesSize"},
              { value: "Sundae", label: "🍦Sundae", trigger: () => {
                add('Sundae');
                return "drinks"; }
              },
            ]
          },
          {
            id: "friesSize",
            message: "Would you like to upgrade your Fries to a Medium or a Large?",
            trigger: "sizeFries"
          },
          {
            id: "sizeFries",
            options: [
              { value: "Large", label: "✅Yes, make it Large", trigger: () => {
                add('Fries (Large)');
                return "addSundae"; }
              },
              { value: "Medium", label: "✅Yes, make it Medium", trigger: () => {
                add('Fries (Medium)');
                return "addSundae"; } },
              { value: "Regular", label: "❌No, thank you", trigger: () => {
                add('Fries (Regular)');
                return "addSundae"; }  }
            ]
          },
          {
            id: "addSundae",
            message: "Would you like to add a Sundae?",
            trigger: "adtnlSundae"
          },
          {
            id: "adtnlSundae",
            options: [
              { value: "Yes", label: "✅Yes, please.", trigger: () => {
                add('Additional Sundae');
                return "drinks"; }  },
              { value: "No", label: "❌No, thank you.", trigger: "drinks" }
            ]
          },
          {
            id: "drinks",
            message: "Choose your drink:",
            trigger: "drinkChoice"
          },
          {
            id: "drinkChoice",
            options: [
              { value: "Softrdrinks", label: "🥤Softrdrinks", trigger: "upgrade" },
              { value: "Iced Tea", label: "🍹Iced Tea", trigger: "upgrade1" },
            ]
          },
          {
            id: "upgrade",
            message: "Would you like to upgrade your drink to a Medium or a Large?",
            trigger: "sizeChoice"
          },
          {
            id: "sizeChoice",
            options: [
              { value: "Large", label: "✅Yes, make it Large", trigger: () => {
                add('Softrdrinks (Large)');
                return "additional"; }
              },
              { value: "Medium", label: "✅Yes, make it Medium", trigger: () => {
                add('Softrdrinks (Medium)');
                return "additional"; } },
              { value: "Regular", label: "❌No, thank you", trigger: () => {
                add('Softrdrinks (Regular)');
                return "additional"; }  }
            ]
          },
{
            id: "upgrade1",
            message: "Would you like to upgrade your drink to a Medium or a Large?",
            trigger: "sizeChoice1"
          },
          {
            id: "sizeChoice1",
            options: [
              { value: "Large", label: "✅Yes, make it Large", trigger: () => {
                add('Ice Tea (Large)');
                return "additional"; }
              },
              { value: "Medium", label: "✅Yes, make it Medium", trigger: () => {
                add('Ice Tea (Medium)');
                return "additional"; } },
              { value: "Regular", label: "❌No, thank you", trigger: () => {
                add('Ice Tea (Regular)');
                return "additional"; }  }
            ]
          },
          {
            id: "additional",
            message: "Do you have any additional orders?",
            trigger: "choice2"
          },
          {
            id: "choice2",
            options: [
              { value: 1, label: "✅Yes", trigger: () => {
                add('');
                return "showMenu";} },
              { value: 2, label: "❌None", trigger: "pie" }
            ]
          },
          {
            id: "pie",
            message: "Would you like to add a 🥧 pie to your meal?",
            trigger: "pieChoice"
          },
          {
            id: "pieChoice",
            options: [
              { value: "Pie", label: "✅Yes, please", trigger: () => {
                add('Pie');
                return "exit"; } },
              { value: "No", label: "❌No, thank you", trigger: "exit" }
            ]
          },
    {
            id: 'exit',
            component: <Summary />,
            asMessage: true,
            trigger: 'update',
          },
    {
            id: 'update1',
            message: 'Maraming Salamat!	 Hope to dine with you again soon.',
            end: true,
          },
          {
            id: 'update',
            message: 'Maraming Salamat!	 Hope to dine with you soon. Your meal(s) will be with you shortly.⌛ ',
            end: true,
          },
        ];
  return (
    <>
      <ThemeProvider theme={CHATBOT_THEME}>
        
        <ChatBot headerTitle="Connect with PutaHe"
  speechSynthesis={{ enable: true, lang: 'en' }}
          steps={steps} floating={true}
          botAvatar={botAvatar}
          avatarStyle={avatarStyle}/>
          
      </ThemeProvider>
    </>
  );
};

export default ChatBotHelper;
