---
title: métricas
date: 2016-12-04 20:53:05
---

El proyecto tiene un ciclo de integración continua con travis-ci, de esta forma cada vez que se hace un push en el repositorio, se desdencadena el proceso de construcción. 

Los pasos que se realizan son:

1. clonado del repositorio
1. ejecución de la compilación
1. ejecución de test unitarios
1. generación de informes de métricas de calidad
1. generación de informes de cobertura 
1. generación de badges con resumen del resultado
1. publicación y actualización de los informes resultantes en este site

<table border="0">
  <tr border="0">
    <td colspan="6">[![Travis-ci](https://travis-ci.org/pro-gen/progen.svg?branch=master)](https://travis-ci.org/pro-gen/progen)</td>
  </tr>
  <tr border="0">
    <td colspan="2">[![PMD](http://pro-gen.github.io/pmd.svg)](http://pro-gen.github.io/reports-mvn/pmd.html)</td>
    <td colspan="2">[![Checkstyle](http://pro-gen.github.io/checkstyle.svg)](http://pro-gen.github.io/reports-mvn/checkstyle.html)</td>
    <td colspan="2">[![Findbugs](http://pro-gen.github.io/findbugs.svg)](http://pro-gen.github.io/reports-mvn/findbugs.html)</td>
  </tr>
  <tr border="0">
    <td colspan="3">[![JaCoCo](https://img.shields.io/badge/JaCoCo-√-brightgreen.svg)](https://pro-gen.github.io/reports-mvn/jacoco/)</td>
    <td colspan="3">[![Coveralls.io](https://coveralls.io/repos/pro-gen/progen/badge.svg?branch=master)](https://coveralls.io/r/pro-gen/progen?branch=master)</td>
  </tr>
</table>

