import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.css';
import 'file-loader?name=[name].[ext]!./custombutton.html';
import 'froala-editor/js/plugins.pkgd.min.js';

import FroalaEditor from 'react-froala-wysiwyg';
import React from 'react';
import ReactDOM from 'react-dom';
import Froalaeditor from 'froala-editor';
import './style.css';

import versionIcon from './icons/versions.svg';
import undoIcon from './icons/undo.svg';
import redoIcon from './icons/redo.svg';
import crossLineOnTextIcon from './icons/crossLineOnText.svg';
import HorizonteLineOnTextIcon from './icons/HorizonteLineOnText.svg';
import HorijentalLineIcon from './icons/HorijentalLine.svg';
import boldIcon from './icons/bold.svg';
import underlineIcon from './icons/underline.svg';
import crossWordIcon from './icons/crossWord.svg';
import orderListIcon from './icons/orderList.svg';
import unorderListIcon from './icons/unorderList.svg';
import textColorIcon from './icons/textColor.svg';
import colorPickerIcon from './icons/colorPicker.svg';
import leftSideTextIcon from './icons/leftSideText.svg';
import rightSideTextIcon from './icons/rightSideText.svg';
import centerTextIcon from './icons/centerText.svg';
import fixAlignTextIcon from './icons/fixAlignText.svg';
import tebLeftIcon from './icons/tebLeft.svg';
import tebRightIcon from './icons/tebRight.svg';
import eiconIcon from './icons/icon.svg';
import starIcon from './icons/star.svg';
import x2upIcon from './icons/X2up.svg';
import x2DownIcon from './icons/X2Down.svg';
import boxIcon from './icons/box.svg';
import lignSpaceIcon from './icons/lignSpace.svg';
import checkBoxIcon from './icons/checkBox.svg';
import qoutIcon from './icons/qout.svg';


  FroalaEditor.ICON_TEMPLATES = {
    font_awesome: '<i class="fa fa-[NAME]" aria-hidden="true"></i>,',
    font_awesome_5: '<i class="fas fa-[FA5NAME]" aria-hidden="true"></i>',
    font_awesome_5s: '<i class="far fa-[FA5NAME]" aria-hidden="true"></i>',
    text: '<span style="text-align: center;">[NAME]</span>',
    image: '<img src=[SRC] alt=[ALT] />',
    svg: '<img width="100%" height="100%" src="[PATH]" alt="">'
  }
 Froalaeditor.DefineIconTemplate('svg', '<img width="100%" height="100%" src="[PATH]" alt="">');
  Froalaeditor.DefineIcon('versions', {NAME: 'Versions', PATH: versionIcon});
  Froalaeditor.RegisterCommand('versions', {
    title: 'Versions',
    focus: false,
    undo: false,
    refreshAfterCallback: false,
    callback: function () {
    }
  });

  Froalaeditor.DefineIcon('undo', {PATH: undoIcon});
  Froalaeditor.RegisterCommand('undo', {
    title: 'Undo',
  });

  Froalaeditor.DefineIcon('redo', {PATH: redoIcon});
  Froalaeditor.RegisterCommand('redo', {
    title: 'Redo',
  });

  Froalaeditor.DefineIcon('clearFormatting', {PATH: crossLineOnTextIcon});
  Froalaeditor.RegisterCommand('clearFormatting', {
    title: '',
  });

  Froalaeditor.DefineIcon('strikeThrough', {PATH: HorizonteLineOnTextIcon});
  Froalaeditor.RegisterCommand('strikeThrough', {
    title: '',
  });

  Froalaeditor.DefineIcon('insertHR', {PATH: HorijentalLineIcon});
  Froalaeditor.RegisterCommand('insertHR', {
    title: '',
  });

  Froalaeditor.DefineIcon('bold', {PATH: boldIcon});
  Froalaeditor.RegisterCommand('bold', {
    title: '',
  });

  Froalaeditor.DefineIcon('underline', {PATH: underlineIcon});
  Froalaeditor.RegisterCommand('underline', {
    title: '',
  });

  Froalaeditor.DefineIcon('italic', {PATH: crossWordIcon});
  Froalaeditor.RegisterCommand('italic', {
    title: '',
  });

  Froalaeditor.DefineIcon('formatOLSimple', {NAME: 'Ordered List', PATH: orderListIcon});
  Froalaeditor.RegisterCommand('formatOLSimple', {
    title: '',
    type: 'button',
    options: {
      'default': 'Default',
      circle: 'Circle',
      disc: 'Disc',
      square: 'Square'
    },
    refresh: function refresh($btn) {
      this.lists.refresh($btn, 'OL');
    },
    callback: function callback(cmd, param) {
      this.lists.format('OL', param);
    },
    plugin: 'lists'
  });

  Froalaeditor.DefineIcon('formatUL', {PATH: unorderListIcon});
  Froalaeditor.RegisterCommand('formatUL', {
    title: '',
    type: 'button',
    // hasOptions: function hasOptions() {
    //   return this.opts.listAdvancedTypes;
    // },
    options: {
      'default': 'Default',
      circle: 'Circle',
      disc: 'Disc',
      square: 'Square'
    },
    refresh: function refresh($btn) {
      this.lists.refresh($btn, 'UL');
    },
    callback: function callback(cmd, param) {
      this.lists.format('UL', param);
    },
    plugin: 'lists'
  });

  Froalaeditor.DefineIcon('textColor', {PATH: textColorIcon});
  Froalaeditor.RegisterCommand('textColor', {
    title: '',
    undo: false,
    focus: true,
    refreshOnCallback: false,
    popup: true,
    callback: function callback() {
      if (!this.popups.isVisible('textColor.picker')) {
        this.colors.showColorsPopup('textColor');
      } else {
        if (this.$el.find('.fr-marker').length) {
          this.events.disableBlur();
          this.selection.restore();
        }

        this.popups.hide('textColor.picker');
      }
    }
  });

  Froalaeditor.DefineIcon('backgroundColor', {PATH: colorPickerIcon});
  Froalaeditor.RegisterCommand('backgroundColor', {
    title: '',
    undo: false,
    focus: true,
    refreshOnCallback: false,
    popup: true,
    callback: function callback() {
      if (!this.popups.isVisible('backgroundColor.picker')) {
        this.colors.showColorsPopup('backgroundColor');
      } else {
        if (this.$el.find('.fr-marker').length) {
          this.events.disableBlur();
          this.selection.restore();
        }

        this.popups.hide('backgroundColor.picker');
      }
    }
  });

  Froalaeditor.DefineIcon('alignLeft', {PATH: leftSideTextIcon});
  Froalaeditor.RegisterCommand('alignLeft', {
    type: 'button',
    title: '',
    callback: function callback() {
      this.align.apply('left');
    },
    refresh: function refresh($btn) {
      this.align.refreshForToolbar($btn);
    },
    plugin: 'align'
  });

  Froalaeditor.DefineIcon('alignRight', {PATH: rightSideTextIcon});
  Froalaeditor.RegisterCommand('alignRight', {
    type: 'button',
    title: '',
    callback: function callback() {
      this.align.apply('right');
    },
    refresh: function refresh($btn) {
      this.align.refreshForToolbar($btn);
    },
    plugin: 'align'
  });

  Froalaeditor.DefineIcon('alignCenter', {PATH: centerTextIcon});
  Froalaeditor.RegisterCommand('alignCenter', {
    type: 'button',
    title: '',
    callback: function callback() {
      this.align.apply('center');
    },
    refresh: function refresh($btn) {
      this.align.refreshForToolbar($btn);
    },
    plugin: 'align'
  });

  Froalaeditor.DefineIcon('alignJustify', {PATH: fixAlignTextIcon});
  Froalaeditor.RegisterCommand('alignJustify', {
    type: 'button',
    title: '',
    callback: function callback() {
      this.align.apply('justify');
    },
    refresh: function refresh($btn) {
      this.align.refreshForToolbar($btn);
    },
    plugin: 'align'
  });

  Froalaeditor.DefineIcon('fontFamily', {NAME: 'Arial', template: 'text'});
  Froalaeditor.RegisterCommand('fontFamily', {
    type: 'dropdown',
    displaySelection: function displaySelection(editor) {
      return editor.opts.fontFamilySelection;
    },
    defaultSelection: function defaultSelection(editor) {
      return editor.opts.fontFamilyDefaultSelection;
    },
    displaySelectionWidth: 120,
    html: function html() {
      var c = '<ul class="fr-dropdown-list" role="presentation">';
      var options = this.opts.fontFamily;

      for (var val in options) {
        if (options.hasOwnProperty(val)) {
          c += "<li role=\"presentation\"><a class=\"fr-command\" tabIndex=\"-1\" role=\"option\" data-cmd=\"fontFamily\" data-param1=\"".concat(val, "\" \n        style=\"font-family: ").concat(val, "\" title=\"").concat(options[val], "\">").concat(options[val], "</a></li>");
        }
      }

      c += '</ul>';
      return c;
    },
    callback: function callback(cmd, val) {
      this.fontFamily.apply(val);
    },
    refresh: function refresh($btn) {
      console.log($btn);
      this.fontFamily.refresh($btn);
    },
    refreshOnShow: function refreshOnShow($btn, $dropdown) {
      this.fontFamily.refreshOnShow($btn, $dropdown);
    },
    plugin: 'fontFamily'
  });

  Froalaeditor.DefineIcon('paragraphFormat', {NAME: 'plus', PATH: colorPickerIcon});
  Froalaeditor.RegisterCommand('paragraphFormat', {
    type: 'dropdown',
    displaySelection: function displaySelection(editor) {
      return editor.opts.paragraphFormatSelection;
    },
    defaultSelection: function defaultSelection(editor) {
      return editor.language.translate(editor.opts.paragraphDefaultSelection);
    },
    displaySelectionWidth: 80,
    html: function html() {
      var c = '<ul class="fr-dropdown-list" role="presentation">';
      var options = this.opts.paragraphFormat;

      for (var val in options) {
        if (options.hasOwnProperty(val)) {
          var shortcut = this.shortcuts.get('paragraphFormat.' + val);

          if (shortcut) {
            shortcut = '<span class="fr-shortcut">' + shortcut + '</span>';
          } else {
            shortcut = '';
          }

          c += '<li role="presentation"><' + (val == 'N' ? this.html.defaultTag() || 'DIV' : val) + ' style="padding: 0 !important; margin: 0 !important; border: 0 !important; background-color: transparent !important; ' + (val == 'PRE' || val == 'N' ? 'font-size: 15px' : 'font-weight: bold !important; ') + (val == 'H1' ? 'font-size: 2em !important; ' : '') + (val == 'H2' ? 'font-size: 1.5em !important; ' : '') + (val == 'H3' ? 'font-size: 1.17em !important; ' : '') + (val == 'H4' ? 'font-size: 15px !important;' : '') + '"  role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="paragraphFormat" data-param1="' + val + '" title="' + this.language.translate(options[val]) + '">' + this.language.translate(options[val]) + '</a></' + (val == 'N' ? this.html.defaultTag() || 'DIV' : val) + '></li>';
        }
      }

      c += '</ul>';
      return c;
    },
    callback: function callback(cmd, val) {
      this.paragraphFormat.apply(val);
    },
    refresh: function refresh($btn) {
      this.paragraphFormat.refresh($btn);
    },
    refreshOnShow: function refreshOnShow($btn, $dropdown) {
      this.paragraphFormat.refreshOnShow($btn, $dropdown);
    },
    plugin: 'paragraphFormat'
  });

  Froalaeditor.DefineIcon('indent', {PATH: tebLeftIcon});
  Froalaeditor.RegisterCommand('indent', {
    title: '',
  });

  Froalaeditor.DefineIcon('outdent', {PATH: tebRightIcon});
  Froalaeditor.RegisterCommand('outdent', {
    title: '',
  });

  Froalaeditor.DefineIcon('emoticons', {PATH: eiconIcon});
  Froalaeditor.RegisterCommand('emoticons', {
    title: '',
    undo: false,
    focus: true,
    refreshAfterCallback: false,
    popup: true,
    callback: function callback() {
      if (this.popups.isVisible('emoticons')) {
        if (this.$el.find('.fr-marker').length) {
          this.events.disableBlur();
          this.selection.restore();
        }

        this.popups.hide('emoticons');
      } else {
        this.emoticons.showEmoticonsPopup();
      }
    },
    plugin: 'emoticons'
  });

  Froalaeditor.DefineIcon('specialCharacters', {PATH: starIcon});
  Froalaeditor.RegisterCommand('specialCharacters', {
    title: '',
    icon: 'specialCharacters',
    undo: false,
    focus: false,
    popup: true,
    refreshAfterCallback: false,
    plugin: 'specialCharacters',
    showOnMobile: true,
    callback: function callback() {
      if (!this.popups.isVisible('specialCharacters')) {
        this.specialCharacters.showSpecialCharsPopup();
      } else {
        if (this.$el.find('.fr-marker')) {
          this.events.disableBlur();
          this.selection.restore();
        }

        this.popups.hide('specialCharacters');
      }
    }
  });

  Froalaeditor.DefineIcon('superscript', {PATH: x2upIcon});
  Froalaeditor.RegisterCommand('superscript', {
    title: '',
  });

  Froalaeditor.DefineIcon('subscript', {PATH: x2DownIcon});
  Froalaeditor.RegisterCommand('subscript', {
    title: '',
  });

  Froalaeditor.DefineIcon('insertTable', {PATH: boxIcon});
  Froalaeditor.RegisterCommand('insertTable', {
    title: '',
    undo: false,
    focus: true,
    refreshOnCallback: false,
    popup: true,
    callback: function callback() {
      if (!this.popups.isVisible('table.insert')) {
        this.table.showInsertPopup();
      } else {
        if (this.$el.find('.fr-marker').length) {
          this.events.disableBlur();
          this.selection.restore();
        }

        this.popups.hide('table.insert');
      }
    },
    plugin: 'table'
  });

  Froalaeditor.DefineIcon('lineSpacing', {PATH: lignSpaceIcon});
  Froalaeditor.RegisterCommand('lineSpacing', {
    title: '',
  });

  Froalaeditor.DefineIcon('addTask', {PATH: checkBoxIcon});
  Froalaeditor.RegisterCommand('addTask', {
    title: '',
  });

  Froalaeditor.DefineIcon('quote', {PATH: qoutIcon});
  Froalaeditor.RegisterCommand('quote', {
    title: '',
    type: 'dropdown',
    html: function html() {
      var c = '<ul class="fr-dropdown-list" role="presentation">';
      var options = {
        increase: 'Increase',
        decrease: 'Decrease'
      };

      for (var val in options) {
        if (options.hasOwnProperty(val)) {
          var shortcut = this.shortcuts.get("quote.".concat(val));
          c += "<li role=\"presentation\"><a class=\"fr-command fr-active ".concat(val, "\" tabIndex=\"-1\" role=\"option\" data-cmd=\"quote\" data-param1=\"").concat(val, "\" title=\"").concat(options[val], "\">").concat(this.language.translate(options[val])).concat(shortcut ? "<span class=\"fr-shortcut\">".concat(shortcut, "</span>") : '', "</a></li>");
        }
      }

      c += '</ul>';
      return c;
    },
    callback: function callback(cmd, val) {
      this.quote.apply(val);
    },
    plugin: 'quote'
  });

  Froalaeditor.DefineIcon('Fork Doc', {PATH: lignSpaceIcon});
  Froalaeditor.RegisterCommand('Fork Doc', {
    title: '',
  });

// Render Froala Editor component.
  ReactDOM.render(<FroalaEditor tag='textarea' config={{
    pluginsEnabled: null, 
    language: 'en',
    listAdvancedTypes: true, 
    toolbarButtons: [
          ['versions'],
          ['undo', 'redo', 'clearFormatting', 'strikeThrough', 'insertHR'], 
          ['paragraphFormat', 'fontFamily', 'bold', 'underline', 'italic', 'formatOLSimple', 'formatUL', 'textColor', 'backgroundColor'], 
          ['fontSize', 'alignLeft', 'alignRight', 'alignCenter', 'alignJustify'], 
          ['indent', 'outdent', 'emoticons', 'specialCharacters'], 
          ['superscript', 'subscript', 'insertTable', 'lineSpacing'], 
          ['addTask', 'quote', 'Fork Doc']
      ]}} />, document.getElementById('editor'));