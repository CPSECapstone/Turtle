drop database if exists turtle;
create database turtle;
use turtle;

create table Person (
   id int auto_increment primary key,
   firstName varchar(30),
   lastName varchar(50) not null,
   email varchar(150) not null,
   password varchar(50),
   whenRegistered bigint not null,
   termsAccepted bigint,
   role int unsigned not null,  # 0 normal, 1 admin
   unique key(email)
);

insert into Person (firstName, lastName, email,       password,   whenRegistered, role)
            VALUES ("Joe",     "Admin", "joe@test.com", "password", UNIX_TIMESTAMP(), 1);
