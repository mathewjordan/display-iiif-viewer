<?php

use IIIFWP\App\Block;

/**
 * Block Name: IIIF WP
 **/

$fields = get_fields();

$uri = $fields['manifest'];
$manifest = json_decode(file_get_contents($uri));

$context = $manifest->{'@context'};

$previewSize = 640;

if (is_array($context)) :
    if (in_array('https://iiif.io/api/presentation/3/context.json', $context)) :
        $presentation = 3;
        $label = str_replace('"', '&quot;', $manifest->label->en[0]);
        $summary = str_replace('"', '&quot;', $manifest->summary->en[0]);
        $rights = $manifest->rights;
        $requiredStatement = $manifest->requiredStatement->value->en[0];
        $itemBody = $manifest->items[0]->items[0]->items[0]->body[0];

        if ($itemBody->width <= $previewSize || $itemBody->height <= $previewSize) {
            $preview = $itemBody->id;
        } else {
            $preview = str_replace('/full/full', '/full/!' . $previewSize . ',' . $previewSize, $itemBody->id);
        }

    endif;
else :
    $presentation = 2;
    $label = str_replace('"', '&quot;', $manifest->label);
    $summary = str_replace('"', '&quot;', $manifest->description);
    $rights = $manifest->rights;
    $requiredStatement = $manifest->attribution;
    $resource = $manifest->sequences[0]->canvases[0]->images[0]->resource;

    if (is_array($requiredStatement)) {
        $array = array_filter($requiredStatement, function ($var){
            return ($var !== NULL && $var !== FALSE && $var !== "");
        });
        $requiredStatement = implode(', ', $array);
    }

    if ($resource->width <= $previewSize || $resource->height <= $previewSize) {
        $preview = $resource->{'@id'};
    } else {
        $preview = str_replace('/full/full', '/full/' . $previewSize . ',', $resource->{'@id'});
    }
endif;

?>
<div class="yith-iiif-wp"
     id="<?php print $block['id']; ?>">
    <div class="yith-iiif-wp-viewer"
         id="yith-iiif-wp-viewer-<?php print str_replace('block_', '', $block['id']); ?>"
         data-label="<?php print $label; ?>"
         data-preview="<?php print $preview; ?>"
         data-summary="<?php print $summary; ?>"
         data-rights="<?php print $rights; ?>"
         data-required-statement='<?php print $requiredStatement; ?>'
         data-manifest="<?php print $fields['manifest']; ?>"
         data-viewer="<?php print $fields['viewer']; ?>"
         data-mode="<?php print $fields['mode']; ?>">
    </div>
    <?php if (Block::is_post_editor()) : ?>
        <figure style="display: flex; justify-content: center; flex-direction: column;">
            <img src="<?php print $preview; ?>"
                 alt="<?php print $label; ?>" />
            <figcaption>
                <span><strong><?php print $label; ?></strong></span>
                <?php if ($summary) : ?>
                    <p><?php print $summary; ?></p>
                <?php endif; ?>
                <?php if ($requiredStatement) : ?>
                    <div className="yith-iiif-wp-attribution" style="font-size: 0.75em;">
                        Attribution: <?php print $requiredStatement; ?>
                    </div>
                <?php endif; ?>
            </figcaption>
        </figure>
    <?php endif; ?>
</div>
