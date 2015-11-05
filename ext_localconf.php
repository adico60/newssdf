<?php
if (!defined ('TYPO3_MODE')) 	die ('Access denied.');

  ## Extending TypoScript from static template uid=43 to set up userdefined tag:
t3lib_extMgm::addTypoScript($_EXTKEY,'editorcfg','
	tt_content.CSS_editor.ch.tx_newssdf_pi1 = < plugin.tx_newssdf_pi1.CSS_editor
',43);

t3lib_extMgm::addPItoST43($_EXTKEY,'pi1/class.tx_newssdf_pi1.php','_pi1','list_type',1);

## Register Hook for additional News Markers
$GLOBALS ['TYPO3_CONF_VARS']['EXTCONF']['tt_news']['extraItemMarkerHook']['additionalFields'] = 'EXT:newssdf/hooks/class.tx_newssdf_additionalMarkers.php:tx_newssdf_additionalMarkers';
?>