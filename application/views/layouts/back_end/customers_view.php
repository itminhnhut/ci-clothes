<?php var_dump($this->data); ?>
<div class="container">
	<h1 style="font-size:20pt">Simple Serverside Datatable Codeigniter</h1>

	<h3>Customers Data</h3>
	<br />
	<a href="<?php echo base_url() ?>admin/create_index">Create new</a>
	<table id="table" class="display" cellspacing="0" width="100%">
		<thead>
			<tr>
				<th>No</th>
				<th>First Name</th>
				<th>Last Name</th>
				<th>Phone</th>
				<th>Address</th>
				<th>City</th>
				<th>Country</th>
				<th></th>
			</tr>
		</thead>
		<tbody>
		</tbody>

		<tfoot>
			<tr>
				<th>No</th>
				<th>First Name</th>
				<th>Last Name</th>
				<th>Phone</th>
				<th>Address</th>
				<th>City</th>
				<th>Country</th>
				<th></th>
			</tr>
		</tfoot>
	</table>
</div>