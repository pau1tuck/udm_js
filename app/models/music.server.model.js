'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Music Schema
 */
var MusicSchema = new Schema({
	title: {
		type: String,
		default: '',
		required: 'Please provide a track title',
		trim: true
	},
	version: {
		type: String,
		default: '',
		trim: true
	},
	artist: {
		type: String,
		default: '',
		required: 'Please provide an artist name',
		trim: true
	},
	label: {
		type: String,
		default: '',
		trim: true
	},
	month: {
		type: Number,
		required: 'Please fill Music name'
	},
	year: {
		type: Number,
		default: '',
		required: 'Please fill Music name'
	},
	tags: {
		type: String,
		default: ''
	},
	host: {
		type: String,
		default: '',
		required: 'Please fill Music name',
		trim: true
	},
	url: {
		type: String,
		default: '',
		required: 'Please fill Music name'
	},
	image: {
		type: String,
		default: '',
	},
	status: {
		type: String,
		default: '',
		trim: true
	},
	review: {
		type: String,
		default: '',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Music', MusicSchema);