create database Nodejs;
create schema priv;

create table priv.productos(
    user_id int,
    user_name varchar(40) not null,
    user_apellido  varchar(40) not null,
    user_edad int

)

insert into priv.usuarios(user_id,
						  user_name,
                		  user_apellido,
                          User_edad)values
                (1,'Didier','Mantilla',22)

select * from priv.usuarios