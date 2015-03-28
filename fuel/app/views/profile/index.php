<h2>Listing <span class='muted'>Profiles</span></h2>
<br>
<?php if ($profiles): ?>
<table class="table table-striped">
	<thead>
		<tr>
			<th>Date</th>
			<th>Description</th>
			<th>&nbsp;</th>
		</tr>
	</thead>
	<tbody>
<?php foreach ($profiles as $profile): ?>		<tr>

			<td><?php echo $profile->date; ?></td>
			<td><?php echo $profile->description; ?></td>
			<td>
				<?php echo Html::anchor('profile/view/'.$profile->id, '<i class="icon-eye-open" title="View"></i>'); ?> |
				<?php echo Html::anchor('profile/edit/'.$profile->id, '<i class="icon-wrench" title="Edit"></i>'); ?> |
				<?php echo Html::anchor('profile/delete/'.$profile->id, '<i class="icon-trash" title="Delete"></i>', array('onclick' => "return confirm('Are you sure?')")); ?>

			</td>
		</tr>
<?php endforeach; ?>	</tbody>
</table>

<?php else: ?>
<p>No Profiles.</p>

<?php endif; ?><p>
	<?php echo Html::anchor('profile/create', 'Add new Profile', array('class' => 'btn btn-success')); ?>

</p>
