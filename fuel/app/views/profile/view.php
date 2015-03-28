<h2>Viewing <span class='muted'>#<?php echo $profile->id; ?></span></h2>

<p>
	<strong>Date:</strong>
	<?php echo $profile->date; ?></p>
<p>
	<strong>Description:</strong>
	<?php echo $profile->description; ?></p>

<?php echo Html::anchor('profile/edit/'.$profile->id, 'Edit'); ?> |
<?php echo Html::anchor('profile', 'Back'); ?>