<div class="container">
	<div class="row">
		<div class="col-lg-12 col-sm-12 well">
			<?php
			$attributes = array("class" => "form-horizontal", "id" => "update", "name" => "update");
			echo form_open("admin/update_index/".$this->data[0]->id, $attributes);?>

			<fieldset>
				<legend>Update new</legend>
				<div class="form-row">
					<div class="form-group col-md-6">
						<label for="inputEmail4" class="col-form-label">First Name</label>
						<input type="text" class="form-control" id="inputfirstname" placeholder="First Name" name="firstname" value="<?php echo $this->data[0]->FirstName ?>">
					</div>
					<div class="form-group col-md-6">
						<label for="inputPassword4" class="col-form-label">Last Name</label>
						<input type="text" class="form-control" id="inputfullname" placeholder="Last Name" name="lastname" value="<?php echo $this->data[0]->LastName ?>">
					</div>
				</div>
				<div class="form-group col-md-12">
					<label for="inputAddress" class="col-form-label">Address</label>
					<input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" name="address" value="<?php echo $this->data[0]->address ?>">
				</div>
				<div class="form-row">
					<div class="form-group col-md-4">
						<label for="inputphone" class="col-form-label">Phone</label>
						<input type="text" class="form-control" id="inputphone" placeholder="Phone number" name="phone" value="<?php echo $this->data[0]->phone ?>">
					</div>
					<div class="form-group col-md-4">
						<label for="inputCity" class="col-form-label">City</label>
						<input type="text" class="form-control" id="inputCity" name="city" value="<?php echo $this->data[0]->city ?>">
					</div>
					<div class="form-group col-md-4">
						<label for="country" class="col-form-label">Country</label>
						<input type="text" class="form-control" id="inputCity" name="country" value="<?php echo $this->data[0]->country ?>">
					</div>
				</div>
				<div class="form-group col-md-4">
					<button type="submit" class="btn btn-primary">Save</button>
				</div>
			</fieldset>
		</div>
	</div>
</div>