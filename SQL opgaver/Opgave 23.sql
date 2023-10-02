USE BikeStores;

SELECT count(customer_id) as total_customers
FROM sales.customers;

USE BikeStores;

select * from sales.customers;


USE BikeStores;

select order_id, required_date, shipped_date from sales.orders
where shipped_date >= DATEADD(DAY, 2, required_date);

select * from sales.orders;


USE BikeStores;

SELECT cast(ROUND(AVG(list_price) ,0)as int) as avg_list_prod_price
FROM production.products;


select * from production.products;