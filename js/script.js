let type="text";function tbdemo_hide_ai_popup(){jQuery(".tbdemo-ai-popup-layout, .tbdemo-ai-popup-container, .tbdemo-ai-propmts-empty-container, .tbdemo-ai-text-prompts, .tbdemo-ai-headline-prompts, .tbdemo-ai-propmts-result-container").hide()}function tbdemo_show_ai_popup(e){""==e?(jQuery(".tbdemo-ai-description-input").val("").trigger("change"),"text"===type?jQuery(".tbdemo-ai-text-prompts").show():jQuery(".tbdemo-ai-headline-prompts").show(),jQuery(".tbdemo-ai-propmts-result-container").hide(),jQuery(".tbdemo-ai-popup-layout, .tbdemo-ai-popup-container, .tbdemo-ai-propmts-empty-container").show()):(jQuery(".tbdemo-ai-result-textarea").val(e),jQuery(".tbdemo-ai-propmts-empty-container").hide(),jQuery(".tbdemo-ai-popup-layout, .tbdemo-ai-popup-container, .tbdemo-ai-propmts-result-container").show())}jQuery(document).ready((function(){jQuery(document).on("click",".tbdemo-ai-close, .tbdemo-ai-popup-layout",(function(){tbdemo_hide_ai_popup()})),jQuery(document).on("click",".tbdemo-ai-new-prompt-button",(function(){jQuery(".tbdemo-ai-error-message").hide(),tbdemo_show_ai_popup("")})),jQuery(document).on("click",".tbdemo-ai-suggested-propmt",(function(){let e=jQuery(this).text();jQuery(document).find(".tbdemo-ai-description-input").val(e).change()})),jQuery(document).on("change paste keyup",".tbdemo-ai-description-input",(function(){""!=jQuery(this).val()?jQuery(".tbdemo-ai-propmts-empty-container .tbdemo-ai-suggested-propmts-content").hide():jQuery(".tbdemo-ai-propmts-empty-container .tbdemo-ai-suggested-propmts-content").show()})),jQuery(document).on("click",".tbdemo-ai-action-button, .tbdemo-ai-use-text-button",(function(){tbdemo_hide_ai_popup(),tbdemo_show_upgrade_popup("Site content click")})),jQuery(document).on("click",".tbdemo-ai-select-value",(function(){jQuery(".tbdemo-ai-select-container").addClass("tbdemo-ai-select-closed"),jQuery(".tbdemo-ai-select-options-container").hide();let e=jQuery(this).closest(".tbdemo-ai-select-container");e.hasClass("tbdemo-ai-select-closed")?(e.find(".tbdemo-ai-select-options-container").show(),e.removeClass("tbdemo-ai-select-closed")):(e.find(".tbdemo-ai-select-options-container").hide(),e.addClass("tbdemo-ai-select-closed"))})),jQuery(document).on("click",".tbdemo-ai-popup-container",(function(e){jQuery(e.target).is(".tbdemo-ai-select-container, .tbdemo-ai-select-value")||(jQuery(".tbdemo-ai-select-options-container").hide(),jQuery(".tbdemo-ai-select-container").addClass("tbdemo-ai-select-closed"))}))}));