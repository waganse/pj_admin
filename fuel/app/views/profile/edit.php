<h2>Editing <span class='muted'>Profile</span></h2>
<br>

<?php echo render('profile/_form'); ?>
<p>
	<?php echo Html::anchor('profile/view/'.$profile->id, 'View'); ?> |
	<?php echo Html::anchor('profile', 'Back'); ?></p>
