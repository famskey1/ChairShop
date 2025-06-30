import { useEffect, useState } from "react";
import Button from "../../../Default/Button";
import { useNavigate } from "react-router-dom";
import moment from "moment"
import "moment/dist/locale/ru";
import Header from '../../../Default/Header'
import Footer from '../../../Default/Footer'
import Post from '../CRUD/Post'

export default function PostOrders(){
    // function Create(e){
    //     e.preventDefault();
    //     const body = JSON.parse(localStorage.getItem('body'))
    //     const chooseValue = document.querySelector('select').value;
    // }
    // const formData = new FormData(document.getElementById('create'))
    // const data = Object.fromEntries(formData);
    // console.log(data);
    // Post(data, "https://localhost:7153/api/v1/users")
    // alert('Успешно!')    
    
    return(
     <>
     <Header/>
     <form className="info" id='create' onSubmit={Create}>
        <input type="number" placeholder="ID Пользователя" name ="id_user"></input>
            <input type="datetime-local" placeholder="Дата и время" name ="dt_buy"></input>
            <input type="number" placeholder="Общая стоимость" name ="all_cost"></input>
            Способ оплаты:
            <select name = 'way_pay'>
              <option value ='наличные'>Наличные</option>
              <option value ='картой'>Картой</option>
              <option value ='онлайн'>Онлайн</option>
            </select>
            Способ доставки:
            <select name = 'way_delivery'>
              <option value ='самовывоз'>Самовывоз</option>
              <option value ='почтой'>Почтой</option>
              <option value ='на дом'>На дом</option>
            </select>
            Доставлено?:
            <input type="checkbox" name ="is_delivered"></input>
    </form>
    <Footer/>
    </>
    )}