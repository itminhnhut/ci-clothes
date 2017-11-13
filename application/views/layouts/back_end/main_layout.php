<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title><?php echo $title ?></title>
	<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
	<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css">
	<?php echo $styles;?>
	<link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>assets/css/admin/custom.css">
</head>
<body class="nav-md">
	<div class="container body">
		<div class="main_container">
			<?php $this->load->view("layouts/back_end/left") ?>
			<?php $this->load->view($header) ?>
			<div class="right_col" role="main">
				<?php echo $contents;?>
			</div>
			<?php $this->load->view("layouts/back_end/footer") ?>
		</div>
	</div>
</div>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
<?php echo $scripts_header;?>

<!-- Custom Theme Scripts -->
<script src="<?php echo base_url(); ?>assets/js/admin/custom.js"></script>

<script type="text/javascript">

	var table;

	$(document).ready(function() {

		table = $('#table').DataTable({

				"processing": true, //Feature control the processing indicator.
				"serverSide": true, //Feature control DataTables' server-side processing mode.
				"order": [], //Initial no order.

				"ajax": { // Load data for the table's content from an Ajax source
				"url": "<?php echo site_url('admin/ajax_list')?>",
				"type": "POST"
			},

				"columnDefs": [  //Set column definition initialisation properties.
				{
					"targets": [ 0 ], //first column / numbering column
					"orderable": false, //set not orderable
				},
				],

			});

	});
</script>
</body>
</html>