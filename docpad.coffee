# Define the Configuration
_s = require 'underscore.string'
docpadConfig = {
     outPath:                            'web-html/pages'
     srcPath:                            'web-html/_assets/docpad'
     plugins:
        moment:
            formats: [
                {raw: 'date', format: 'MMMM D, YYYY', formatted: 'humanDate'}
                {raw: 'date', format: '', formatted: 'computerDate'}
            ]
        cleanurls:
            enabled:true
        htmlmin:
            removeComments: true
            removeCommentsFromCDATA: false
            removeCDATASectionsFromCDATA: false
            collapseWhitespace: true
            collapseBooleanAttributes: false
            removeAttributeQuotes: false
            removeRedundantAttributes: false
            useShortDoctype: false
            removeEmptyAttributes: false
            removeOptionalTags: false
            removeEmptyElements: false
            # Disabled on development environments.
            environments:
                development:
                    enabled: false
    templateData:
        site:
            title: ""
            description: ""
            tags: ""
            excerptLength: 300
        getPreparedTitle: -> @document.title or @site.title
        getPreparedDescription: -> @document.description or @site.description
        getPreparedTags: -> @document.tags or @site.tags
        getMetaData: ->
            data = @document.meta or {}
            data.ctime = @document.ctime
            data.mtime = @document.mtime
            JSON.stringify(data)
        getJSONMenu: (pages) ->
            data = []
            for page in pages
              data.push({url:page.url,title:(page.short or page.title)})
            JSON.stringify(data,null,2)
        getExcerpt: (post) ->
            excerpt = ""
            if (post or @document).description then excerpt = (post or @document).description + " "
            excerpt += (post or @document).contentRenderedWithoutLayouts
            moreTag = /<!--\s*more\s*-->/i.exec(excerpt)
            if moreTag
                excerpt = _s.trim _s.stripTags( excerpt[0..moreTag.index-1] )
            else
                excerpt = _s.prune _s.stripTags(excerpt), @site.excerptLength, '&hellip;'
            excerpt
	collections:
		pages: ->
			@getCollection('html').findAllLive({isPage:true},[date:-1]).on "add", (model) ->
				model.setMetaDefaults({layout:"default",htmlmin:true})
		articles: ->
			@getCollection('html').findAllLive({isArticle:true},[date:-1]).on "add", (model) ->
				model.setMetaDefaults({layout:"article",htmlmin:true})
}

# Export the Configuration
module.exports = docpadConfig