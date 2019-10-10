function createGrids() {
    // Aeronaves
    $().w2grid({
        name: 'aeronaves',
        header: 'Aeronaves',
        show: { header: true, toolbar: true, footer: true, toolbarAdd: true, toolbarSave: true },
        onAdd: addDefaultRecord,
        columns: [
            { field: 'marca', caption: 'Marca/modelo', size: '30%', sortable: true,
              resizable: true, sortable: true, editable: {type: 'text'} },
            { field: 'matricula', caption: 'Matricula', size: '30%', sortable: true,
              resizable: true, sortable: true, editable: {type: 'text'} },
            { field: 'obs', caption: 'Observaciones', size: '30%', resizable: true,
              editable: {type: 'text'}}
        ],
        records: data.aeronaves
    });

    // Socios
    $().w2grid({
        name: 'socios',
        header: 'Socios / Clientes / Proveedores',
        show: { header: true, toolbar: true, footer: true, toolbarAdd: true, toolbarSave: true },
        searches: [{ field: 'nombre', caption: 'Apellido', type: 'text' }],
        sortData: [{ field: 'nombre', direction: 'ASC' }],
        onAdd: addDefaultRecord,
        // onSave: updateData,
        // onDelete: deleteRecords,
        columns: [
            { field: 'nro', caption: 'Nro', size: '8%', sortable: true,
              resizable: true, sortable: true, editable: {type: 'number'} },
            { field: 'nombre', caption: 'Apellido y nombres', size: '30%', sortable: true,
              resizable: true, sortable: true, editable: {type: 'text'} },
            { field: 'dni', caption: 'D.N.I.', size: '10%', resizable: true,
              editable: {type: 'number'} },
            { field: 'cuit', caption: 'CUIT/L', size: '10%', resizable: true,
              editable: {type: 'text'} },
            { field: 'licencia', caption: 'Licencia', size: '10%', resizable: true,
              editable: {type: 'text'} },
            { field: 'email', caption: 'Email', size: '30%', resizable: true,
              editable: {type:'text'} },
            { field: 'desde', caption: 'Desde', size: '10%', resizable: true,
              editable: {type: 'date'} },
            { field: 'tipo', caption: 'Tipo', size: '10%', resizable: true,
              editable: { type: 'list', items: selectList['tiposSocio'] } },
        ],
        records: data.socios
    });

    // Tarifas
    $().w2grid({
        name: 'tarifas',
        header: 'Tarifas',
        show: { header: true, toolbar: true, footer: true, toolbarAdd: true, toolbarDelete: true,
                toolbarSave: true },
        onAdd: addDefaultRecord,
        // onSave: updateData,
        columns: [
            { field: 'aeronave', caption: 'Aeronave', size: '25%', sortable: true,
              resizable: true, editable: {type: 'list', items: selectList['aeronaves']} },
            { field: 'pilotos', caption: 'Pilotos', size: '25%', sortable: true,
              resizable: true, editable: {type: 'number'}, render: 'float:2' },
            { field: 'alumnos', caption: 'Alumnos', size: '25%', sortable: true,
              resizable: true, editable: {type: 'number'}, render: 'float:2' },
            { field: 'pilotosext', caption: 'Pilotos ext.', size: '25%', sortable: true,
              resizable: true, editable: {type: 'number'}, render: 'float:2' },
            { field: 'particular', caption: 'Particular', size: '25%', sortable: true,
              resizable: true, editable: {type: 'number'}, render: 'float:2' },
            { field: 'instructor', caption: 'C/Instr.', size: '25%', sortable: true,
              resizable: true, editable: {type: 'number'}, render: 'float:2' },
            { field: 'vigente', caption: 'Vigente desde', size: '25%', resizable: true,
              editable: {type: 'date'} },
        ],
        records: data['tarifas'] || []
    });

    // Vuelos
    $().w2grid({
        name: 'vuelos',
        header: 'Vuelos',
        show: { header: true, toolbar: true, footer: true, toolbarAdd: true, toolbarDelete: true,
                toolbarSave: true },
        toolbar: {
            items: [
                { type: 'break' },
                { type: 'button', id: 'genMovs', caption: 'Debitar', img: 'icon-folder',
                  hint: 'Generar movimientos (débitos) de los vuelos seleccionados' }
            ],
            onClick: debitarVuelos
        },
        searches: [{ field: 'piloto', caption: 'Apellido', type: 'text' },
                   { field: 'salida', direction: 'ASC'}],
        sortData: [{ field: 'salida', direction: 'ASC'}],
        onAdd: addDefaultRecord,
        // onSave: updateData,
        // onDelete: deleteRecords,
        onChange: updateVuelo,
        columns: [
            { field: 'aeronave', caption: 'Aeronave', size: '10%', sortable: true,
              resizable: true, editable: {type: 'list', items: selectList['aeronaves']} },
            { field: 'piloto', caption: 'Piloto', size: '25%', sortable: true,
              resizable: true, editable: {type: 'combo', items: selectList['socios']} },
            { field: 'tipovuelo', caption: 'Tipo vuelo', size: '10%', sortable: true,
              resizable: true, editable: {type: 'list', items: selectList['tiposVuelo']} },
            { field: 'desde', caption: 'Desde', size: '10%', resizable: true,
              editable: {type: 'text'} },
            { field: 'hasta', caption: 'Hasta', size: '10%', resizable: true,
              editable: {type: 'text'} },
            { field: 'aterrizajes', caption: 'Aterrizajes', size: '10%', resizable: true,
              editable: {type: 'int'} },
            { field: 'odomant', caption: 'Odom. Ant.', size: '10%', resizable: true,
              editable: {type: 'int'} },
            { field: 'odomact', caption: 'Odom. Actual', size: '10%', resizable: true,
              editable: {type: 'int'} },
            { field: 'duracion', caption: 'Duración', size: '10%', resizable: true,
              render: 'float:1' },
            { field: 'salida', caption: 'Salida', size: '15%', resizable: true,
              editable: {type: 'datetime'} },
            { field: 'llegada', caption: 'Llegada', size: '15%', resizable: true,
              editable: {type: 'datetime'} }
        ],
        records: data.vuelos
    });

    // Combustible
    $().w2grid({
        name: 'combustible',
        header: 'Combustible',
        show: { header: true, toolbar: true, footer: true, toolbarAdd: true, toolbarDelete: true,
                toolbarSave: true },
        searches: [{ field: 'piloto', caption: 'Apellido', type: 'text' },
                   { field: 'desde', direction: 'ASC'}],
        sortData: [{ field: 'piloto', direction: 'ASC' }, { field: 'desde', direction: 'ASC'}],
        onAdd: addDefaultRecord,
        // onSave: updateData,
        // onDelete: deleteRecords,
        onChange: calcLitrosCisterna,
        columns: [
            { field: 'fecha', caption: 'Fecha', size: '15%', resizable: true,
              editable: {type: 'date'} },
            { field: 'origen', caption: 'Origen', size: '20%', resizable: true,
              editable: {type: 'list', items: selectList['depComb']} },
            { field: 'destino', caption: 'Destino', size: '20%', resizable: true,
              editable: {type: 'list', items: selectList['depComb']} },
            { field: 'contadorinicial', caption: 'Contador Inicial', size: '25%', resizable: true,
              editable: {type: 'number'} },
            { field: 'contadorfinal', caption: 'Contador Final', size: '25%', resizable: true,
              editable: {type: 'number'} },
            { field: 'litros', caption: 'Litros', size: '15%', resizable: true,
              editable: {type: 'number'} },
            { field: 'remanente', caption: 'Remanente', size: '15%', resizable: true,
              editable: {type: 'number'} },
            { field: 'obs', caption: 'Observaciones', resizable: true, editable: {type: 'text'} },
        ],
        records: data.combustible
    });

    // Conceptos
    $().w2grid( {
        name: 'conceptos',
        header: 'Conceptos',
        show: { header: true, toolbar: true, footer: true, toolbarAdd: true, toolbarDelete: true,
                toolbarSave: true },
        onAdd: addDefaultRecord,
        // onSave: updateData,
        columns: [
            { field: 'descripcion', caption: 'Descripción', size: '80%', sortable: true,
              resizable: true, editable: {type: 'text'} },
        ],
        records: data.conceptos
    });

    // Cuentas
    $().w2grid({
        name: 'cuentas',
        header: 'Cuentas contables',
        show: { header: true, toolbar: true, footer: true, toolbarAdd: true, toolbarDelete: true,
                toolbarSave: true },
        onAdd: addDefaultRecord,
        // onSave: updateData,
        // onDelete: deleteRecords,
        columns: [
            { field: 'recid', caption: 'Nro', size:'25%', editable: {type: 'number'}},
            { field: 'descripcion', caption: 'Descripción', size: '80%', sortable: true,
              resizable: true, editable: {type: 'text'} },
        ],
        records: data.cuentas
    });

    // Movimientos
    $().w2grid({
        name: 'movs',
        header: 'Movimientos',
        show: { header: true, toolbar: true, footer: true, toolbarAdd: true, toolbarDelete: true,
                toolbarSave: true },
        onAdd: addDefaultRecord,
        // onSave: updateData,
        // onDelete: deleteRecords,
        columns: [
            { field: 'socio', caption: 'Socio/Cuenta', size: '25%', sortable: true,
              resizable: true, editable: {type: 'combo', items: selectList['cuentas']} },
            { field: 'fecha', caption: 'Fecha', size: '15%', resizable: true,
              editable: {type: 'date'} },
            { field: 'concepto', caption: 'Concepto', size: '30%', resizable: true,
              editable: { type: 'list', items: selectList['conceptos']} },
            { field: 'debe', caption: 'Debe', size: '15%', resizable: true,
              editable: {type: 'number'}, render: 'float:2' },
            { field: 'haber', caption: 'Haber', size: '15%', resizable: true,
              editable: {type: 'number'}, render: 'float:2' },
            { field: 'ref', caption: 'Referencia', size: '25%', resizable: true,
              editable: {type: 'text'} },
            { field: 'obs', caption: 'Observaciones', resizable: true, editable: {type: 'text'} },
        ],
        records: data.movs
    });
}

function gridSaldos() {
    // master/detail grids
    var mdgrids =
        '<div style="position: relative; width: 100%; height: 100%;">' +
        '<div id="gmsaldos" style="position: absolute; left: 0px; width: 24.9%; height: 100%">'+
        '</div>' +
        '<div id="gdctacte" style="position: absolute; right: 0px; width: 74.9%; height: 100%">'+
        '</div>' + '</div>';

    var saldos = w2ui['saldos'] || $().w2grid({
        name: 'saldos',
        header: 'Lista de saldos',
        show: { header: true, toolbar: true, footer: true },
        columns: [
            { field: 'socio', caption: 'Cuenta', size: '75%', sortable: true,
              resizable: true },
            { field: 'saldo', caption: 'Saldo', size: '25%', resizable: true, render: 'float:2' },
        ],
        onClick: function(event) { gridCtaCte(this.get(event.recid).socio); },
        records: []
    });

    w2ui['layout'].content('main', mdgrids);

    // calculate saldos
    for (let socio of selectList['socios']) {
        let saldo = 0.0;
        for (let mov of data['movs']) {
            if (mov.socio == socio.id) {
                saldo += mov.haber - mov.debe;
            }
        }
        saldos.records.push({recid: socio.id, socio: socio.text, saldo: saldo});
    }

    $('#gmsaldos').w2render(saldos);
}

function gridCtaCte(socio) {
    var ctacte = w2ui['ctacte'] || $().w2grid({
        name: 'ctacte',
        header: 'Cuenta corriente: ' + socio,
        show: { header: true, toolbar: true, footer: true },
        columns: [
            { field: 'fecha', caption: 'Fecha', size: '15%', resizable: true },
            { field: 'concepto', caption: 'Concepto', size: '25%', resizable: true },
            { field: 'debe', caption: 'Debe', size: '15%', resizable: true, render: 'float:2' },
            { field: 'haber', caption: 'Haber', size: '15%', resizable: true, render: 'float:2' },
            { field: 'saldo', caption: 'Saldo', size: '15%', resizable: true, render: 'float:2' },
            { field: 'ref', caption: 'Referencia', size: '15%', resizable: true },
            { field: 'obs', caption: 'Observaciones', resizable: true }
        ],
        records: []
    });

    var _saldo = 0.0,
        n = 1;

    for (let mov of data.movs) {
        if (mov.socio.text == socio) {
            _saldo += mov.haber - mov.debe;
            ctacte.records.push({
                recid: n++,
                fecha: mov.fecha,
                concepto: mov.concepto,
                debe: mov.debe,
                haber: mov.haber,
                saldo: _saldo,
                obs: mov.obs
            });
        }
    }
    $('#gdctacte').w2render(ctacte);
}
