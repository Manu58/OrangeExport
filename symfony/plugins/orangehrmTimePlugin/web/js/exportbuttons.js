function exportinit() {
	$('#resultTable').DataTable({
            dom: 'Blfrtip',
            scrollX: false,
            scrollY: true,
            scollCollapse: true,
	    buttons: [
	    {extend: 'excel', 'footer': true},
            {extend: 'csv', 'footer': true},
            {extend: 'pdf', 'footer': true},
            {extend: 'print', 'footer': true}
	    ]
	});
}
