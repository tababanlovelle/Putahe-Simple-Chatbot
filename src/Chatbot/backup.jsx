import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import { Emoji } from 'react-emoji-render';


const CHATBOT_THEME = {
  background: "#FFFEFC",
  fontFamily: "Poppins",
  headerBgColor: "#d4320e",
  headerFontColor: "#fff",
  headerFontSize: "20px",
  botBubbleColor: "#b9bbb6",
  botFontColor: "black",
  userBubbleColor: "RED",
  userFontColor: "#fff"
};

const ChatBotHelper = () => {
   const botAvatar = 'burger.jpg';
  const avatarStyle = { width: '50px', height: '50px' };

  

  
  const steps = [
          {
            id: "greet",
            message: "😄 Mabuhay! Welcome to PutaHe— kung saan mapapasabi ka ng “Mura’t Masarap”.",
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
              { value: "Yes", label: "Yes, please", trigger: "showMenu" },
              { value: "No", label: "No, thank you", trigger: "exit1" }
            ]
          },
          {
            id: "showMenu",
            message: "Choose from the different meals below",
            trigger: "menu"
          },
          {
            id: "menu",
            options: [
              { value: "Burger", label: "Burger Meal", trigger: "snack" },
              { value: "Pasta", label: "Pasta Meal", trigger: "snack" },
              { value: "Chicken", label: "Chicken Meal", trigger: "drinks" }
            ]
          },
          {
            id: "snack",
            message: "{previousValue} comes with accompanying snack, choose your preffered snack.",
            trigger: "snackChoice"
          },
          {
            id: "snackChoice",
            options: [
              { value: "Fries", label: "Fries", trigger: "friesSize" },
              { value: "Sundae", label: "Sundae", trigger: "drinks" }
            ]
          },
          {
            id: "friesSize",
            message: "Do you like to upgrade your fries to medium or large?",
            trigger: "sizeFries"
          },
          {
            id: "sizeFries",
            options: [
              { value: "Large", label: "Yes, make it Large", trigger: "addSundae" },
              { value: "Medium", label: "Yes, make it Medium", trigger: "addSundae" },
              { value: "Regular", label: "No, thank you", trigger: "addSundae" }
            ]
          },
          {
            id: "addSundae",
            message: "Would you like to add some sundae to your meal?",
            trigger: "adtnlSundae"
          },
          {
            id: "adtnlSundae",
            options: [
              { value: "Yes", label: "Yes, please", trigger: "drinks" },
              { value: "No", label: "No, thank you", trigger: "drinks" }
            ]
          },
          {
            id: "drinks",
            message: "What type of drink do you preffer for your meal?",
            trigger: "drinkChoice"
          },
          {
            id: "drinkChoice",
            options: [
              { value: "Softrdrinks", label: "Softrdrinks", trigger: "upgrade" },
              { value: "Iced Tea", label: "Iced Tea", trigger: "upgrade" }
            ]
          },
          {
            id: "upgrade",
            message: "Do you like to upgrade your drink to medium or large?",
            trigger: "sizeChoice"
          },
          {
            id: "sizeChoice",
            options: [
              { value: "Large", label: "Yes, make it Large", trigger: "additional" },
              { value: "Medium", label: "Yes, make it Medium", trigger: "additional" },
              { value: "Regular", label: "No, thank you", trigger: "additional" }
            ]
          },
          {
            id: "additional",
            message: "Meron ka pa bang order?",
            trigger: "choice2"
          },
          {
            id: "choice2",
            options: [
              { value: 1, label: "Yes", trigger: "showMenu" },
              { value: 2, label: "None", trigger: "pie" }
            ]
          },
          {
            id: "pie",
            message: "Would you like to add some pie to your meal?",
            trigger: "pieChoice"
          },
          {
            id: "pieChoice",
            options: [
              { value: "Pie", label: "Yes, please", trigger: "exit" },
              { value: "No", label: "No, thank you", trigger: "exit" }
            ]
          },
          {
            id: 'exit',
            message: (props) => {
              const { steps } = props;
              const order = {
                meal: steps['menu'].value,
                main: steps['menu'].value,
                fries: steps['snackChoice']?.value === 'Fries' ? 'Fries' : '',
                sundae: steps['snackChoice']?.value === 'Sundae' ? 'Sundae' : '',
                drinks: steps['drinkChoice']?.value || '',
                size: steps['sizeFries']?.value === 'Regular' ? '(Regular)\n' : steps['sizeFries']?.value === 'Large' ? '(Large)' :  steps['sizeFries']?.value === 'Medium' ? '(Medium)' : '',
                size1: steps['sizeChoice']?.value === 'Regular' ? '(Regular)\n' :  (steps['sizeChoice']?.value === 'Large' ? '(Large)' : steps['sizeChoice']?.value === 'Medium' ? '(Medium)' : ''),
                addSundae: steps['adtnlSundae']?.value === 'Yes' ? 'Additional Sundae' : '',
                pie: steps['pieChoice']?.value === 'Pie' ? 'Additional Pie' : '',
              };
              return `${order.meal} Meal:
                          ${order.meal}
                        ${order.fries} ${order.sundae} ${order.size}
                        \n${order.drinks} ${order.size1}

                        \n${order.sundae}
                        \n${order.pie}`;
  },
  trigger: 'exit1',
  },
          {
            id: 'exit1',
            message: "Maraming Salamat! Hope to dine with you again soon. Your order will be with you shortly.",
            end: true,
          },
        ];
  return (
    <>
      <ThemeProvider theme={CHATBOT_THEME}>
        <ChatBot steps={steps} floating={true}
          botAvatar={botAvatar}
      avatarStyle={avatarStyle}/>
      </ThemeProvider>
    </>
  );
};

export default ChatBotHelper;
