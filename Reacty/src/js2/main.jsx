(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Comment = function (_React$Component) {
	_inherits(Comment, _React$Component);

	function Comment() {
		_classCallCheck(this, Comment);

		return _possibleConstructorReturn(this, (Comment.__proto__ || Object.getPrototypeOf(Comment)).apply(this, arguments));
	}

	_createClass(Comment, [{
		key: "edit",
		value: function edit() {
			alert("Editing comment");
		}
	}, {
		key: "remove",
		value: function remove() {
			alert("Removing comment");
		}
	}, {
		key: "render",
		value: function render() {
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
	}]);

	return Comment;
}(React.Component);

var Checkbox = function (_React$Component2) {
	_inherits(Checkbox, _React$Component2);

	function Checkbox(props) {
		_classCallCheck(this, Checkbox);

		var _this2 = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, props));

		_this2.state = { checked: true };
		return _this2;
	}

	_createClass(Checkbox, [{
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
				React.createElement("input", { type: "checkbox", defaultChecked: this.state.checked }),
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

	function Container() {
		_classCallCheck(this, Container);

		return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
	}

	_createClass(Container, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "board" },
				React.createElement(
					Comment,
					null,
					"joehoe"
				),
				React.createElement(
					Comment,
					null,
					"hallooo"
				),
				React.createElement(
					Comment,
					null,
					"gekkie"
				),
				React.createElement(Checkbox, null)
			);
		}
	}]);

	return Container;
}(React.Component);

ReactDOM.render(React.createElement(Container, null), document.getElementById('example'));

},{}]},{},[1]);
