<?php 
global $incomeup_options, $ABdev_title_bar_title;
?>

<?php if(!isset($incomeup_options['hide_title_breadcrumbs_bar']) || $incomeup_options['hide_title_breadcrumbs_bar']!=1): ?>
	<section id="title_breadcrumbs_bar">
		<div class="container clearfix">
			<div class="floatleft">
				<?php if(!isset($incomeup_options['hide_title_from_bar']) || $incomeup_options['hide_title_from_bar']!=1): ?>
					<h1><?php echo (!empty($ABdev_title_bar_title)) ? $ABdev_title_bar_title : get_the_title();?></h1>
				<?php endif; ?>
			</div>
			<div class="floatright">
				Apply Button Here
			</div>
		</div>
	</section>
<?php endif; ?>