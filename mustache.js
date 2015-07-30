'use strict';

var mustacheRenderer = function(logger, opts) {

    var mustache = require(opts.mustacheModule),
        defaults = require(opts.defaultsModule);

    return function(content, file, done) {

        var channel      = opts.channel || 'default',
            mustacheOpts = opts.mustacheOpts;

        mustache.setOptions(mustacheOpts);
        mustache.setDefaults(defaults);

        mustache.setStaticData(channel);
        mustache.parseRequestHtml(content);
        mustache.includePartials();
        mustache.compileTemplates();

        done(mustache.replacePartials(content));
    };
};

mustacheRenderer.$inject = ['logger', 'config.karmaMustachePreprocessor'];

module.exports = mustacheRenderer;