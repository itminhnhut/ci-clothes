<div class="container">
	<div class="row">
		<div class="col-lg-12 col-sm-12 well">
			<?php
			$attributes = array("class" => "form-horizontal", "id" => "creat", "name" => "creat");
			echo form_open("admin/create_index", $attributes);?>

			<fieldset>
				<legend>Creat new</legend>
				<div class="form-row">
					<div class="form-group col-md-6">
						<label for="inputEmail4" class="col-form-label">First Name</label>
						<input type="text" class="form-control" id="inputfirstname" placeholder="First Name" name="firstname" value="<?php echo set_value('firstname'); ?>">
						<span class="text-danger"><?php echo form_error('firstname'); ?></span>
					</div>
					<div class="form-group col-md-6">
						<label for="inputPassword4" class="col-form-label">Last Name</label>
						<input type="text" class="form-control" id="inputfullname" placeholder="Last Name" name="lastname" value="<?php echo set_value('lastname'); ?>">
						<span class="text-danger"><?php echo form_error('lastname'); ?></span>
					</div>
				</div>
				<div class="form-group col-md-12">
					<label for="inputAddress" class="col-form-label">Address</label>
					<input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" name="address" value="<?php echo set_value('address'); ?>">
					<span class="text-danger"><?php echo form_error('address'); ?></span>
				</div>
				<div class="form-row">
					<div class="form-group col-md-4">
						<label for="inputphone" class="col-form-label">Phone</label>
						<input type="number" class="form-control" id="inputphone" placeholder="Phone number" name="phone" value="<?php echo set_value("phone") ?>">
						<span class="text-danger"><?php echo form_error('phone'); ?></span>
					</div>
					<div class="form-group col-md-4">
						<label for="inputCity" class="col-form-label">City</label>
						<input type="text" class="form-control" id="inputCity" name="city" value="<?php echo set_value("city")?>">
						<span class="text-danger"><?php echo form_error('city'); ?></span>
					</div>
					<div class="form-group col-md-4">
						<label for="country" class="col-form-label">Country</label>
						<input type="text" class="form-control" id="inputCity" name="country" value="<?php echo set_value("country") ?>">
						<span class="text-danger"><?php echo form_error('country'); ?></span>
					</div>
				</div>
				<div class="form-group col-md-4">
					<button type="submit" class="btn btn-primary">Save</button>
				</div>
			</fieldset>
		</div>
	</div>
</div>