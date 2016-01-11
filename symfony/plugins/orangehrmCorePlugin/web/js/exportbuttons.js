function exportinit() {
	$('#resultTable').DataTable({
            dom: 'Blfrtip',
            scrollX: true,
            scrollY: 500,
            scollCollapse: true,
	    buttons: [
	    {extend: 'excel', 'footer': true},
            {extend: 'csv', 'footer': true},
            {extend: 'pdf', 'footer': true},
            {extend: 'print', 'footer': true}
	    ]
	});
}
