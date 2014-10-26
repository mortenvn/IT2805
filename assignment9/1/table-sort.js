function sortData(column){
    var tableBody = document.getElementById('the-table-body');
    var rows = tableBody.getElementsByTagName('tr');

    for(var i = 0; i < rows.length - 1; i++) {
        for(var j = 0; j < rows.length - (i + 1); j++) {
            var former = rows.item(j).getElementsByTagName('td').item(column).innerHTML;
            var latter = rows.item(j+1).getElementsByTagName('td').item(column).innerHTML;

            if(former > latter) {
                tableBody.insertBefore(rows.item(j+1), rows.item(j));
            }
        }
    }
}