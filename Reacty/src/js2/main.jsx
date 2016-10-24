(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Comment = function (_React$Component) {
	_inherits(Comment, _React$Component);

	function Comment(props) {
		_classCallCheck(this, Comment);

		var _this = _possibleConstructorReturn(this, (Comment.__proto__ || Object.getPrototypeOf(Comment)).call(this, props));

		_this.state = { editing: false };
		_this.edit = _this.edit.bind(_this);
		_this.save = _this.save.bind(_this);
		return _this;
	}

	_createClass(Comment, [{
		key: "edit",
		value: function edit() {
			this.setState({ editing: true });
		}
	}, {
		key: "remove",
		value: function remove() {
			console.log("Removing comment");
		}
	}, {
		key: "save",
		value: function save() {
			var val = this.refs.newText.value;
			console.log(val);
			this.setState({ editing: false });
		}
	}, {
		key: "renderNormal",
		value: function renderNormal() {
			return React.createElement(
				"div",
				{ className: "commentContainer" },
				React.createElement(
					"div",
					{ className: "commentText" },
					this.props.children
				),
				React.createElement(
					"button",
					{ onClick: this.edit, className: "button-primary" },
					"Edit"
				),
				React.createElement(
					"button",
					{ onClick: this.remove, className: "button-danger" },
					"Remove"
				)
			);
		}
	}, {
		key: "renderForm",
		value: function renderForm() {
			return React.createElement(
				"div",
				{ className: "commentContainer" },
				React.createElement("textarea", { ref: "newText", defaultValue: this.props.children }),
				React.createElement(
					"button",
					{ onClick: this.save, className: "button-success" },
					"Save"
				)
			);
		}
	}, {
		key: "render",
		value: function render() {
			if (this.state.editing) {
				return this.renderForm();
			} else {
				return this.renderNormal();
			}
		}
	}]);

	return Comment;
}(React.Component);

var Checkbox = function (_React$Component2) {
	_inherits(Checkbox, _React$Component2);

	function Checkbox(props) {
		_classCallCheck(this, Checkbox);

		// In ES6, React components no longer autobind this to non React methods. Therefor:
		var _this2 = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, props));

		_this2.handleEvent = _this2.handleEvent.bind(_this2);
		_this2.state = { checked: true };
		return _this2;
	}

	_createClass(Checkbox, [{
		key: "handleEvent",
		value: function handleEvent() {
			this.setState({ checked: !this.state.checked });
		}
	}, {
		key: "render",
		value: function render() {
			var msg;
			if (this.state.checked) {
				msg = 'checked';
			} else {
				msg = 'unchecked';
			}
			return React.createElement(
				"div",
				null,
				React.createElement("input", { type: "checkbox", onChange: this.handleEvent, defaultChecked: this.state.checked }),
				React.createElement(
					"h3",
					null,
					"Checkbox is ",
					msg
				)
			);
		}
	}]);

	return Checkbox;
}(React.Component);

var Container = function (_React$Component3) {
	_inherits(Container, _React$Component3);

	function Container(props) {
		_classCallCheck(this, Container);

		var _this3 = _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).call(this, props));

		_this3.state = { comments: ['I like bacon', 'and cheeseee', 'and hamburgers']
		};
		return _this3;
	}

	_createClass(Container, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "board" },
				this.state.comments.map(function (item, i) {
					return React.createElement(
						Comment,
						{ key: i },
						item
					);
				}),
				React.createElement(Checkbox, null)
			);
		}
	}]);

	return Container;
}(React.Component);

ReactDOM.render(React.createElement(Container, null), document.getElementById('container'));

},{}]},{},[1]);
