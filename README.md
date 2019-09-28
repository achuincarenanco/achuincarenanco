# aerodata

Sistema de gestión de Aeroclub Huinca Renancó

Gracias a los siguientes servicios gratuitos:

1. [jsonbin](https://jsonbin.io/) para el almacenamiento de datos
2. [Auth0](https://auth0.com/) para la autenticación

## Características generales

Este sistema permite registrar actividades comunes en un aeroclub, en particular permite:

- Registrar los socios, proveedores y cuentas contables (bancos, caja, etc.)
- Registrar los vuelos de pilotos, instrucción, bautismos y de servicios.
- Registrar los movimientos de combustibles.

# Cambios

- Agregar info pilotos:
    - Licencia, habilitaciones, CMA, ...
    - Estado: habilitado (en qué aviones, con/sin pasajeros)
      El administrador debería cargar/modificar esto
    - Para alumnos agregar alguna con info extra
- Agregar Aeronaves
    - Columnas: Matricula, marca, modelo, horas voladas, fecha proxima habilitacion, horas servicio motor, y tarifas vigentes
- Vuelos:
    - Hacer dos formularios:
        1. Apertura del vuelo (checkea el horometro, novedades, etc). No debería permitirlo si CMA vencido, si tiene más de 30 días sin volar, o si está inhabilitado por cualquier motivo.
        2. Cierre del vuelo
    - Agregar el checkbox vuelos debitados
    - Debitar y re-debitar por cambios de tarifas (quienes no pagaron)
    - Agregar columna para vuelos de traslado a taller (50% piloto 50% gastos vuelos taller)
    - Agregar campo de novedades
    - En la carga del formulario, al elegir el avión debe aparecer el vuelo anterior (y cargar el odómetro final como inicial del próximo)

- Tarifas: Por aeronave - tipo de socio - tipo vuelos
- Tarifa instructor: (adaptacion, re-adaptacion, instrucción)

- Movimientos:
    - Partida doble: De cuenta a cuenta (tipo asientos)
    - En vuelos con instructor debitar el vuelo debitar al piloto y acreditar al instructor
