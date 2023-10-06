USE world;

SELECT region, SurfaceArea 
FROM country
ORDER BY SurfaceArea DESC;

USE world;

SELECT LifeExpectancy, Name 
FROM country
ORDER BY LifeExpectancy asc;

USE world;

SELECT region, SUM(population) AS SumPerRegion
FROM country
GROUP BY region
HAVING SUM(population) < 8000000
ORDER BY SumPerRegion asc;

select * from Country;