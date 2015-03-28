<?php echo Form::open(array("class"=>"form-horizontal")); ?>

	<fieldset>
		<div class="control-group">
			<?php echo Form::label('Date', 'date', array('class'=>'control-label')); ?>

			<div class="controls">
				<?php echo Form::input('date', Input::post('date', isset($profile) ? $profile->date : ''), array('class' => 'span4', 'placeholder'=>'Date')); ?>

			</div>
		</div>
		<div class="control-group">
			<?php echo Form::label('Description', 'description', array('class'=>'control-label')); ?>

			<div class="controls">
				<?php echo Form::input('description', Input::post('description', isset($profile) ? $profile->description : ''), array('class' => 'span4', 'placeholder'=>'Description')); ?>

			</div>
		</div>
		<div class="control-group">
			<label class='control-label'>&nbsp;</label>
			<div class='controls'>
				<?php echo Form::submit('submit', 'Save', array('class' => 'btn btn-primary')); ?>			</div>
		</div>
	</fieldset>
<?php echo Form::close(); ?>