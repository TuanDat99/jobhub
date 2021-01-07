$(document).ready(function () {
    $('#example').DataTable({
        "language": {
            "info": "Total: _TOTAL_",
            "infoEmpty": "total: 0",
            "lengthMenu": "Show _MENU_ record",
            "emptyTable": "No data",
            "infoFiltered": "(tìm kiếm từ _MAX_ bản ghi)",
            "infoPostFix": "",
            "thousands": ",",
            "loadingRecords": "Loading...",
            "processing": "Processing...",
            "search": "Tìm kiếm:",
            "zeroRecords": "None",
            "paginate": {
                "first": "Đầu tiên",
                "last": "Trước",
                "next": "Sau",
                "previous": "Cuối cùng"
            },
            "aria": {
                "sortAscending": ": activate to sort column ascending",
                "sortDescending": ": activate to sort column descending"
            }
        }
    });
});