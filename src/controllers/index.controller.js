const { response } = require('express');
/*const {Pool} = require ('pg');

const pool =new Pool({
    host:'localhost',
    user:'postgres',
    password:'123456',
    database:'camellando',
    port:'5432'

})*/

const { Pool } = require('pg');

const pool = new Pool({
    connectionString: 'postgresql://camellando_owner:PQvu2rh7EDMF@ep-patient-waterfall-a5hpyxd8.us-east-2.aws.neon.tech/camellando?sslmode=require'
});

pool.connect((err) => {
    if (err) {
        console.error('Error de conexión a la base de datos:', err);
    } else {
        console.log('Conectado a la base de datos en Neon.tech');
    }
});

module.exports = pool;


const getProds = async(req,res)=>{
   const response = await pool.query('select * from productos');
   console.log(response.rows);
   //res.send('users');
   res.status(200).json(response.rows);
}

const getProdId = async (req,res)=>{
    //res.send('Usuario ID '+req.params.id);
    const id = req.params.id;
    const response = await pool.query('select * from  priv.productos where id=$1',[id]);
    res.json(response.rows);
}

const createProd = async(req,res)=>{
    const {id,title, price, description, category, image, rating_rate, rating_count}= req.body;
    const response  = await pool.query('INSERT INTO priv.productos (title, price, description, category, image, rating_rate, rating_count) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)',
                [id,id,title, price, description, category, image, rating_rate, rating_count]);
               
    //console.log(req.body);
    console.log(response);
    //res.send('Usuario Creado');
    res.json({
        message: 'Producto Agregado Correctamente',
        body:{
            produc:{id,id,title, price, description, category, image, rating_rate, rating_count}
        }

    })
 }

 const deleteProd = async(req,res)=>{
    const id = req.params.id;
    //console(id);
    const response = await pool.query('delete  from priv.productos where user_id =$1',[id]);
    const response1 = await pool.query('select * from priv.productos');
   console.log(response1.rows);
   //res.send('users');
  res.status(200).json(response1.rows);
 //  res.status(200).json('Usuario borrado');
 }

 const upadteProd =  async(req,res)=>{
    const id = req.params.id;
    const{name,apellido,edad} = req.body;
    //console.log(id,name,apellido,edad);
    const response = await pool.query('update   priv.productos set user_name = $1,user_apellido = $2,user_edad = $3 where user_id = $4',[name,apellido,edad,id]);
    //res.send('Usuario Actualizado');
    console.log(response);
    res.json('Usuario Actualizado');
 }

module.exports={getProds,getProdId,createProd,deleteProd,upadteProd}