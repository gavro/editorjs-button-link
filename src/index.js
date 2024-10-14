/**
 * Build styles
 */
require('./index.css').toString();

/**
 * Import Tool's icon
 */
import ToolboxIcon from '../assets/toolbox.svg';

/**
 * @class ButtonLink
 * @classdesc ButtonLink Tool for Editor.js
 * @property {ButtonLinkData} data - Warning Tool`s input and output data
 * @property {object} api - Editor.js API instance
 *
 * @typedef {object} ButtonLinkData
 * @description ButtonLink Tool`s input and output data
 * @property {string} link - buttonLink`s link
 *
 * @typedef {object} ButtonLinkConfig
 * @description ButtonLink Tool`s initial configuration
 * @property {string} linkPlaceholder - placeholder to show in buttonLink`s link input
 */
export default class ButtonLink {
    /**
     * Get Toolbox settings
     *
     * @public
     * @return {string}
     */
    static get toolbox() {
        return {
            icon: ToolboxIcon,
            title: 'ButtonLink'
        };
    }

    /**
     * Allow to press Enter inside the ButtonLink
     * @public
     * @returns {boolean}
     */
    static get enableLineBreaks() {
        return false;
    }

    /**
     * Default buttonLink type
     *
     * @public
     * @returns {string}
     */
    static get DEFAULT_TYPE() {
        return 'default';
    }

    /**
     * Default buttonLink alignment
     *
     * @public
     * @returns {string}
     */
    static get DEFAULT_ALIGNMENT() {
        return 'center';
    }

    /**
     * Default placeholder for buttonLink title
     *
     * @public
     * @returns {string}
     */
    static get DEFAULT_TITLE_PLACEHOLDER() {
        return 'Title';
    }

    /**
     * Default placeholder for buttonLink link
     *
     * @public
     * @returns {string}
     */
    static get DEFAULT_LINK_PLACEHOLDER() {
        return 'Link';
    }

    /**
     * @returns {array}
     */
    get types() {
        return [
            {
                key: 'default',
                svg: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="#777" x="4" y="5.866" width="11.178" height="8.291"/><path d="M18.15,5.054C18.15,3.89 17.155,2.945 15.93,2.945L3.266,2.945C2.041,2.945 1.047,3.89 1.047,5.054L1.047,14.896C1.047,16.06 2.041,17.005 3.266,17.005L15.93,17.005C17.155,17.005 18.15,16.06 18.15,14.896L18.15,5.054ZM16.045,5.054L16.045,14.896C16.045,14.956 15.994,15.005 15.93,15.005L3.266,15.005C3.203,15.005 3.152,14.956 3.152,14.896C3.152,14.896 3.152,5.054 3.152,5.054C3.152,4.994 3.203,4.945 3.266,4.945L15.93,4.945C15.994,4.945 16.045,4.994 16.045,5.054Z"/></svg>'
            },
            {
                key: 'info',
                svg: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="#1D67BD" x="4" y="5.866" width="11.178" height="8.291"/><path d="M18.15,5.054C18.15,3.89 17.155,2.945 15.93,2.945L3.266,2.945C2.041,2.945 1.047,3.89 1.047,5.054L1.047,14.896C1.047,16.06 2.041,17.005 3.266,17.005L15.93,17.005C17.155,17.005 18.15,16.06 18.15,14.896L18.15,5.054ZM16.045,5.054L16.045,14.896C16.045,14.956 15.994,15.005 15.93,15.005L3.266,15.005C3.203,15.005 3.152,14.956 3.152,14.896C3.152,14.896 3.152,5.054 3.152,5.054C3.152,4.994 3.203,4.945 3.266,4.945L15.93,4.945C15.994,4.945 16.045,4.994 16.045,5.054Z"/></svg>'
            },
            {
                key: 'success',
                svg: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="#5cb85c" x="4" y="5.866" width="11.178" height="8.291"/><path d="M18.15,5.054C18.15,3.89 17.155,2.945 15.93,2.945L3.266,2.945C2.041,2.945 1.047,3.89 1.047,5.054L1.047,14.896C1.047,16.06 2.041,17.005 3.266,17.005L15.93,17.005C17.155,17.005 18.15,16.06 18.15,14.896L18.15,5.054ZM16.045,5.054L16.045,14.896C16.045,14.956 15.994,15.005 15.93,15.005L3.266,15.005C3.203,15.005 3.152,14.956 3.152,14.896C3.152,14.896 3.152,5.054 3.152,5.054C3.152,4.994 3.203,4.945 3.266,4.945L15.93,4.945C15.994,4.945 16.045,4.994 16.045,5.054Z"/></svg>'
            },
            {
                key: 'warning',
                svg: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="#f0ad4e" x="4" y="5.866" width="11.178" height="8.291"/><path d="M18.15,5.054C18.15,3.89 17.155,2.945 15.93,2.945L3.266,2.945C2.041,2.945 1.047,3.89 1.047,5.054L1.047,14.896C1.047,16.06 2.041,17.005 3.266,17.005L15.93,17.005C17.155,17.005 18.15,16.06 18.15,14.896L18.15,5.054ZM16.045,5.054L16.045,14.896C16.045,14.956 15.994,15.005 15.93,15.005L3.266,15.005C3.203,15.005 3.152,14.956 3.152,14.896C3.152,14.896 3.152,5.054 3.152,5.054C3.152,4.994 3.203,4.945 3.266,4.945L15.93,4.945C15.994,4.945 16.045,4.994 16.045,5.054Z"/></svg>'
            },
            {
                key: 'danger',
                svg: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="#d9534f" x="4" y="5.866" width="11.178" height="8.291"/><path d="M18.15,5.054C18.15,3.89 17.155,2.945 15.93,2.945L3.266,2.945C2.041,2.945 1.047,3.89 1.047,5.054L1.047,14.896C1.047,16.06 2.041,17.005 3.266,17.005L15.93,17.005C17.155,17.005 18.15,16.06 18.15,14.896L18.15,5.054ZM16.045,5.054L16.045,14.896C16.045,14.956 15.994,15.005 15.93,15.005L3.266,15.005C3.203,15.005 3.152,14.956 3.152,14.896C3.152,14.896 3.152,5.054 3.152,5.054C3.152,4.994 3.203,4.945 3.266,4.945L15.93,4.945C15.994,4.945 16.045,4.994 16.045,5.054Z"/></svg>'
            },
        ];
    }

    /**
     * @returns {array}
     */
    get alignments() {
        return [
            {
                key: 'full',
                svg: '<svg width="17" height="10" viewBox="0 0 17 10" xmlns="http://www.w3.org/2000/svg"><path d="M13.568 5.925H4.056l1.703 1.703a1.125 1.125 0 0 1-1.59 1.591L.962 6.014A1.069 1.069 0 0 1 .588 4.26L4.38.469a1.069 1.069 0 0 1 1.512 1.511L4.084 3.787h9.606l-1.85-1.85a1.069 1.069 0 1 1 1.512-1.51l3.792 3.791a1.069 1.069 0 0 1-.475 1.788L13.514 9.16a1.125 1.125 0 0 1-1.59-1.591l1.644-1.644z"></path></svg>'
            },
            {
                key: 'left',
                svg: '<svg width="16" height="11" viewBox="0 0 16 11" xmlns="http://www.w3.org/2000/svg"><path d="M1.069 0H13.33a1.069 1.069 0 0 1 0 2.138H1.07a1.069 1.069 0 1 1 0-2.138zm0 4.275H9.03a1.069 1.069 0 1 1 0 2.137H1.07a1.069 1.069 0 1 1 0-2.137zm0 4.275h9.812a1.069 1.069 0 0 1 0 2.137H1.07a1.069 1.069 0 0 1 0-2.137z"></path></svg>'
            },
            {
                key: 'center',
                svg: '<svg width="16" height="11" viewBox="0 0 16 11" xmlns="http://www.w3.org/2000/svg"><path d="M1.069 0H13.33a1.069 1.069 0 0 1 0 2.138H1.07a1.069 1.069 0 1 1 0-2.138zm3.15 4.275h5.962a1.069 1.069 0 0 1 0 2.137H4.22a1.069 1.069 0 1 1 0-2.137zM1.069 8.55H13.33a1.069 1.069 0 0 1 0 2.137H1.07a1.069 1.069 0 0 1 0-2.137z"></path></svg>'
            },
            {
                key: 'right',
                svg: '<svg width="16" height="11" viewBox="0 0 16 11" xmlns="http://www.w3.org/2000/svg"><path d="M1.069,0L13.33,0C13.916,0 14.399,0.483 14.399,1.069C14.399,1.655 13.916,2.138 13.33,2.138L1.07,2.138C0.484,2.138 0.001,1.655 0.001,1.069C0.001,0.483 0.484,0 1.07,0L1.069,0ZM5.336,4.275L13.297,4.275C13.308,4.275 13.319,4.275 13.33,4.275C13.916,4.275 14.399,4.757 14.399,5.344C14.399,5.93 13.916,6.413 13.33,6.413C13.319,6.413 13.308,6.412 13.297,6.412L5.337,6.412C5.326,6.412 5.316,6.413 5.305,6.413C4.718,6.413 4.236,5.93 4.236,5.344C4.236,4.757 4.718,4.275 5.305,4.275C5.316,4.275 5.326,4.275 5.337,4.275L5.336,4.275ZM3.551,8.55L13.363,8.55C13.937,8.568 14.399,9.044 14.399,9.619C14.399,10.193 13.937,10.669 13.363,10.687L3.552,10.687C2.978,10.669 2.515,10.193 2.515,9.619C2.515,9.044 2.978,8.568 3.552,8.55L3.551,8.55Z" style="fill-rule:nonzero;"/></svg>\n'
            }
        ];
    }

    /**
     * ButtonLink Tool`s styles
     *
     * @returns {Object}
     */
    get CSS() {
        return {
            baseClass: this.api.styles.block,
            wrapper: 'cdx-buttonlink',
            input: this.api.styles.input,
            title: 'cdx-buttonlink__title',
            link: 'cdx-buttonlink__link',
            block: this.api.styles.block,
            typeSettingsButton: this.api.styles.settingsButton,
            typeSettingsButtonActive: this.api.styles.settingsButtonActive,
            alignmentSettingsButton: this.api.styles.settingsButton,
            alignmentSettingsButtonActive: this.api.styles.settingsButtonActive,
        };
    }

    /**
     * Render plugin`s main Element and fill it with saved data
     *
     * @param {ButtonLinkData} data — previously saved data
     * @param {ButtonLinkConfig} config — user config for Tool
     * @param {Object} api - Editor.js API
     */
    constructor({data, config, api}) {
        this.api = api;

        this.defaultType = config.buttonLinkType || ButtonLink.DEFAULT_TYPE;
        this.defaultAlignment = config.buttonLinkAlignment || ButtonLink.DEFAULT_ALIGNMENT;
        this.titlePlaceholder = config.titlePlaceholder || ButtonLink.DEFAULT_TITLE_PLACEHOLDER;
        this.linkPlaceholder = config.linkPlaceholder || ButtonLink.DEFAULT_LINK_PLACEHOLDER;

        this.data = {
            type: data.type || this.defaultType,
            alignment: data.alignment || this.defaultAlignment,
            title: data.title || '',
            link: data.link || ''
        };

        /**
         * List of settings buttons
         *
         * @type {HTMLElement[]}
         */
        this.typeSettingsButtons = [];
        this.alignmentSettingsButtons = [];
        this.titleField;
    }

    /**
     * Get current type
     *
     * @returns {Object}
     */
    get currentType() {
        let type = this.types.find(typeItem => typeItem.key === this.data.type);

        if (!type) {
            type = this.defaultType;
        }

        return type;
    }

    /**
     * Get current alignment
     *
     * @returns {Object}
     */
    get currentAlignment() {
        let alignment = this.alignments.find(alignmentItem => alignmentItem.key === this.data.alignment);

        if (!alignment) {
            alignment = this.defaultAlignment;
        }

        return alignment;
    }

    /**
     * Create ButtonLink Tool container with inputs
     *
     * @returns {Element}
     */
    render() {
        const container = this._make('div', [this.CSS.baseClass, this.CSS.wrapper]);
        const title = this._make('div', [this.CSS.input, this.CSS.title, this.data.type, this.data.alignment], {
            contentEditable: true,
            innerHTML: this.data.title
        });
        const link = this._make('div', [this.CSS.input, this.CSS.link], {
            contentEditable: true,
            innerHTML: this.data.link
        });

        title.dataset.placeholder = this.titlePlaceholder;
        link.dataset.placeholder = this.linkPlaceholder;

        container.appendChild(title);
        container.appendChild(link);

        this.titleField = title;

        return container;
    }


    /**
     * Create Block's settings block
     *
     * @returns {HTMLElement}
     */
    renderSettings() {
        const holder = document.createElement('DIV');

        /** Add type selectors */
        this.types.forEach(type => {
            const selectTypeButton = document.createElement('SPAN');

            selectTypeButton.classList.add(this.CSS.typeSettingsButton);

            /**
             * Highlight current level button
             */
            if (this.currentType.key === type.key) {
                selectTypeButton.classList.add(this.CSS.typeSettingsButtonActive);
            }

            /**
             * Add SVG icon
             */
            selectTypeButton.innerHTML = type.svg;

            /**
             * Save level to its button
             */
            selectTypeButton.dataset.type = type.key;

            /**
             * Set up click handler
             */
            selectTypeButton.addEventListener('click', () => {
                this.setType(type.key);
            });

            /**
             * Append settings button to holder
             */
            holder.appendChild(selectTypeButton);

            /**
             * Save settings buttons
             */
            this.typeSettingsButtons.push(selectTypeButton);
        });

        /** Add alignment selectors */
        this.alignments.forEach(alignment => {
            const selectAlignmentButton = document.createElement('SPAN');

            selectAlignmentButton.classList.add(this.CSS.alignmentSettingsButton);

            /**
             * Highlight current level button
             */
            if (this.currentAlignment.key === alignment.key) {
                selectAlignmentButton.classList.add(this.CSS.alignmentSettingsButtonActive);
            }

            /**
             * Add SVG icon
             */
            selectAlignmentButton.innerHTML = alignment.svg;

            /**
             * Save level to its button
             */
            selectAlignmentButton.dataset.alignment = alignment.key;

            /**
             * Set up click handler
             */
            selectAlignmentButton.addEventListener('click', () => {
                this.setAlignment(alignment.key);
            });

            /**
             * Append settings button to holder
             */
            holder.appendChild(selectAlignmentButton);

            /**
             * Save settings buttons
             */
            this.alignmentSettingsButtons.push(selectAlignmentButton);
        });

        return holder;
    }

    /**
     * Callback for Block's settings buttons
     *
     * @param {string} type - type to set
     */
    setType(type) {
        this.data = Object.assign(this.data, {
            type: type,
        });

        /**
         * Highlight button by selected level
         */
        this.typeSettingsButtons.forEach(button => {
            button.classList.toggle(this.CSS.typeSettingsButtonActive, button.dataset.type === type);
            this.titleField.classList.toggle(button.dataset.type, button.dataset.type === type);
        });
    }

    /**
     * Callback for Block's settings buttons
     *
     * @param {string} alignment - alignment to set
     */
    setAlignment(alignment) {
        this.data = Object.assign(this.data, {
            alignment: alignment,
        });

        /**
         * Highlight button by selected level
         */
        this.alignmentSettingsButtons.forEach(button => {
            button.classList.toggle(this.CSS.alignmentSettingsButtonActive, button.dataset.alignment === alignment);
            this.titleField.classList.toggle(button.dataset.alignment, button.dataset.alignment === alignment);
        });
    }

    /**
     * Extract ButtonLink data from ButtonLink Tool element
     *
     * @param {HTMLDivElement} buttonLinkElement - element to save
     * @returns {object}
     */
    save(buttonLinkElement) {
        const title = buttonLinkElement.querySelector(`.${this.CSS.title}`);
        const link = buttonLinkElement.querySelector(`.${this.CSS.link}`);

        return Object.assign(this.data, {
            type: this.currentType.key,
            alignment: this.currentAlignment.key,
            title: title.innerHTML,
            link: link.innerHTML
        });
    }

    /**
     * Helper for making Elements with attributes
     *
     * @param  {string} tagName           - new Element tag name
     * @param  {array|string} classNames  - list or name of CSS classname(s)
     * @param  {Object} attributes        - any attributes
     * @return {Element}
     */
    _make(tagName, classNames = null, attributes = {}) {
        let el = document.createElement(tagName);

        if (Array.isArray(classNames)) {
            el.classList.add(...classNames);
        } else if (classNames) {
            el.classList.add(classNames);
        }

        for (let attrName in attributes) {
            el[attrName] = attributes[attrName];
        }

        return el;
    }

    /**
     * Sanitizer config for ButtonLink Tool saved data
     * @return {Object}
     */
    static get sanitize() {
        return {
            title: {},
            link: {}
        };
    }
}
