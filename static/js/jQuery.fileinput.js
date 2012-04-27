


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>jQuery-Custom-File-Input/js/jQuery.fileinput.js at master · filamentgroup/jQuery-Custom-File-Input</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

    
    

    <meta content="authenticity_token" name="csrf-param" />
<meta content="VyH7U7lomcSfLk8lxbqh2rv3FBKXGni/pkcAV/Hc908=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/stylesheets/bundles/github-44903a1f73ad747716a719c34121af5430bef0ee.css" media="screen" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/stylesheets/bundles/github2-02faadd95ff1183c3df5da2e69d237d00cef71b0.css" media="screen" rel="stylesheet" type="text/css" />
    

    <script src="https://a248.e.akamai.net/assets.github.com/javascripts/bundles/frameworks-7b5694dece50ddf8456fccf7884bd83581722a3f.js" type="text/javascript"></script>
    
    <script defer="defer" src="https://a248.e.akamai.net/assets.github.com/javascripts/bundles/github-353f84228033760c2fbb73eb8dff850cf8e24364.js" type="text/javascript"></script>
    

      <link rel='permalink' href='/filamentgroup/jQuery-Custom-File-Input/blob/87dfca9b9fa2aa4570531380fa2138f14319a150/js/jQuery.fileinput.js'>
    <meta property="og:title" content="jQuery-Custom-File-Input"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/filamentgroup/jQuery-Custom-File-Input"/>
    <meta property="og:image" content="https://a248.e.akamai.net/assets.github.com/images/gravatars/gravatar-140.png?1329275856"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="jQuery-Custom-File-Input - CSS-Friendly File Input"/>

    <meta name="description" content="jQuery-Custom-File-Input - CSS-Friendly File Input" />
  <link href="https://github.com/filamentgroup/jQuery-Custom-File-Input/commits/master.atom" rel="alternate" title="Recent Commits to jQuery-Custom-File-Input:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob  vis-public env-production " data-blob-contribs-enabled="yes">
    <div id="wrapper">

    
    
    

      <div id="header" class="true clearfix">
        <div class="container clearfix">
          <a class="site-logo" href="https://github.com/">
            <!--[if IE]>
            <img alt="GitHub" class="github-logo" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7.png?1323882716" />
            <img alt="GitHub" class="github-logo-hover" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7-hover.png?1324325358" />
            <![endif]-->
            <img alt="GitHub" class="github-logo-4x" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x.png?1323882716" />
            <img alt="GitHub" class="github-logo-4x-hover" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x-hover.png?1324325358" />
          </a>

              
    <div class="topsearch ">
<form accept-charset="UTF-8" action="/search" id="top_search_form" method="get"><input name="utf8" type="hidden" value="&#x2713;" />        <a href="/search" class="advanced-search tooltipped downwards" title="Advanced Search"><span class="mini-icon advanced-search"></span></a>
        <div class="search placeholder-field js-placeholder-field">
          <input type="text" class="search my_repos_autocompleter" id="global-search-field" name="q" results="5" spellcheck="false" autocomplete="off" data-autocomplete="my-repos-autocomplete" placeholder="Search&hellip;" />
          <div id="my-repos-autocomplete" class="autocomplete-results">
            <ul class="js-navigation-container"></ul>
          </div>
          <input type="submit" value="Search" class="button">
          <span class="mini-icon search-input"></span>
        </div>
        <input type="hidden" name="type" value="Everything" />
        <input type="hidden" name="repo" value="" />
        <input type="hidden" name="langOverride" value="" />
        <input type="hidden" name="start_value" value="1" />
</form>      <ul class="top-nav">
          <li class="explore"><a href="https://github.com/explore">Explore</a></li>
          <li><a href="https://gist.github.com">Gist</a></li>
          <li><a href="/blog">Blog</a></li>
        <li><a href="http://help.github.com">Help</a></li>
      </ul>
    </div>


            


  <div id="userbox">
    <div id="user">
      <a href="https://github.com/jhsmyth99"><img height="20" src="https://secure.gravatar.com/avatar/065ffa9e5111065db978d12e864ce787?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
      <a href="https://github.com/jhsmyth99" class="name">jhsmyth99</a>
    </div>
    <ul id="user-links">
      <li>
        <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a New Repo"><span class="mini-icon new-repo"></span></a>
      </li>
      <li>
        <a href="/inbox/notifications" id="notifications" class="tooltipped downwards" title="Notifications">
          <span class="mini-icon notifications"></span>
          <span class="unread_count">1</span>
        </a>
      </li>
      <li><a href="/settings/profile" id="settings" class="tooltipped downwards" title="Account Settings"><span class="mini-icon account-settings"></span></a></li>
      <li>
          <a href="/logout" data-method="post" id="logout" class="tooltipped downwards" title="Log Out"><span class="mini-icon logout"></span></a>
      </li>
    </ul>
  </div>



          
        </div>
      </div>

      

            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="container hentry">
        <div class="pagehead repohead instapaper_ignore readability-menu">
        <div class="title-actions-bar">
          



              <ul class="pagehead-actions">


          <li class="js-toggler-container watch-button-container on">
            <a href="/filamentgroup/jQuery-Custom-File-Input/toggle_watch" class="minibutton btn-watch watch-button js-toggler-target" data-method="post" data-remote="true" rel="nofollow"><span><span class="icon"></span>Watch</span></a>
            <a href="/filamentgroup/jQuery-Custom-File-Input/toggle_watch" class="minibutton btn-watch unwatch-button js-toggler-target" data-method="post" data-remote="true" rel="nofollow"><span><span class="icon"></span>Unwatch</span></a>
          </li>

              <li><a href="/jhsmyth99/jQuery-Custom-File-Input" class="minibutton btn-fork "><span><span class="icon"></span>Your Fork</span></a></li>



      <li class="repostats">
        <ul class="repo-stats">
          <li class="watchers watching">
            <a href="/filamentgroup/jQuery-Custom-File-Input/watchers" title="Watchers — You're Watching" class="tooltipped downwards">
              46
            </a>
          </li>
          <li class="forks">
            <a href="/filamentgroup/jQuery-Custom-File-Input/network" title="Forks - You have a fork" class="tooltipped downwards">
              6
            </a>
          </li>
        </ul>
      </li>
    </ul>

          <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title">
            <span class="mini-icon public-repo"></span>
            <span class="author vcard">
<a href="/filamentgroup" class="url fn" itemprop="url" rel="author">              <span itemprop="title">filamentgroup</span>
              </a></span> /
            <strong><a href="/filamentgroup/jQuery-Custom-File-Input" class="js-current-repository">jQuery-Custom-File-Input</a></strong>
          </h1>
        </div>

          

  <ul class="tabs">
    <li><a href="/filamentgroup/jQuery-Custom-File-Input" class="selected" highlight="repo_sourcerepo_downloadsrepo_commitsrepo_tagsrepo_branches">Code</a></li>
    <li><a href="/filamentgroup/jQuery-Custom-File-Input/network" highlight="repo_network">Network</a>
    <li><a href="/filamentgroup/jQuery-Custom-File-Input/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>1</span></a></li>

      <li><a href="/filamentgroup/jQuery-Custom-File-Input/issues" highlight="repo_issues">Issues <span class='counter'>3</span></a></li>


    <li><a href="/filamentgroup/jQuery-Custom-File-Input/graphs" highlight="repo_graphsrepo_contributors">Graphs</a></li>

  </ul>
 
<div class="frame frame-center tree-finder" style="display:none"
      data-tree-list-url="/filamentgroup/jQuery-Custom-File-Input/tree-list/87dfca9b9fa2aa4570531380fa2138f14319a150"
      data-blob-url-prefix="/filamentgroup/jQuery-Custom-File-Input/blob/87dfca9b9fa2aa4570531380fa2138f14319a150"
    >

  <div class="breadcrumb">
    <span class="bold"><a href="/filamentgroup/jQuery-Custom-File-Input">jQuery-Custom-File-Input</a></span> /
    <input class="tree-finder-input js-navigation-enable" type="text" name="query" autocomplete="off" spellcheck="false">
  </div>

    <div class="octotip">
      <p>
        <a href="/filamentgroup/jQuery-Custom-File-Input/dismiss-tree-finder-help" class="dismiss js-dismiss-tree-list-help" title="Hide this notice forever" rel="nofollow">Dismiss</a>
        <span class="bold">Octotip:</span> You've activated the <em>file finder</em>
        by pressing <span class="kbd">t</span> Start typing to filter the
        file list. Use <span class="kbd badmono">↑</span> and
        <span class="kbd badmono">↓</span> to navigate,
        <span class="kbd">enter</span> to view files.
      </p>
    </div>

  <table class="tree-browser" cellpadding="0" cellspacing="0">
    <tr class="js-header"><th>&nbsp;</th><th>name</th></tr>
    <tr class="js-no-results no-results" style="display: none">
      <th colspan="2">No matching files</th>
    </tr>
    <tbody class="js-results-list js-navigation-container">
    </tbody>
  </table>
</div>

<div id="jump-to-line" style="display:none">
  <h2>Jump to Line</h2>
  <form accept-charset="UTF-8">
    <input name="utf8" type="hidden" value="&#x2713;" />
    <input class="textfield" type="text">
    <div class="full-button">
      <button type="submit" class="classy">
        <span>Go</span>
      </button>
    </div>
  </form>
</div>


<div class="subnav-bar">

  <ul class="actions subnav">
    <li><a href="/filamentgroup/jQuery-Custom-File-Input/tags" class="blank" highlight="repo_tags">Tags <span class="counter">0</span></a></li>
    <li><a href="/filamentgroup/jQuery-Custom-File-Input/downloads" class="blank downloads-blank" highlight="repo_downloads">Downloads <span class="counter">0</span></a></li>
    
  </ul>

  <ul class="scope">
    <li class="switcher">

      <div class="context-menu-container js-menu-container">
        <a href="#"
           class="minibutton bigger switcher js-menu-target js-commitish-button btn-branch repo-tree"
           data-master-branch="master"
           data-ref="master">
          <span><span class="icon"></span><i>branch:</i> master</span>
        </a>

        <div class="context-pane commitish-context js-menu-content">
          <a href="javascript:;" class="close js-menu-close"></a>
          <div class="context-title">Switch Branches/Tags</div>
          <div class="context-body pane-selector commitish-selector js-filterable-commitishes">
            <div class="filterbar">
              <input type="text" id="context-commitish-filter-field" class="commitish-filter" placeholder="Filter branches/tags" />

              <ul class="tabs">
                <li><a href="#" data-filter="branches" class="selected">Branches</a></li>
                <li><a href="#" data-filter="tags">Tags</a></li>
              </ul>
            </div>

              <div class="commitish-item branch-commitish selector-item">
                <h4>
                    <a href="/filamentgroup/jQuery-Custom-File-Input/blob/master/js/jQuery.fileinput.js" data-name="master" rel="nofollow">master</a>
                </h4>
              </div>


            <div class="no-results" style="display:none">Nothing to show</div>
          </div>
        </div><!-- /.commitish-context-context -->
      </div>

    </li>
  </ul>

  <ul class="subnav with-scope">

    <li><a href="/filamentgroup/jQuery-Custom-File-Input" class="selected" highlight="repo_source">Files</a></li>
    <li><a href="/filamentgroup/jQuery-Custom-File-Input/commits/master" highlight="repo_commits">Commits</a></li>
    <li><a href="/filamentgroup/jQuery-Custom-File-Input/branches" class="" highlight="repo_branches" rel="nofollow">Branches <span class="counter">1</span></a></li>
  </ul>

</div>

  
  
  


          

        </div><!-- /.repohead -->

        





<!-- block_view_fragment_key: views7/v8/blob:v21:82b386763e0b5bc781def0c9d673040a -->
  <div id="slider">

    <div class="breadcrumb" data-path="js/jQuery.fileinput.js/">
      <b itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/filamentgroup/jQuery-Custom-File-Input/tree/87dfca9b9fa2aa4570531380fa2138f14319a150" class="js-rewrite-sha" itemprop="url"><span itemprop="title">jQuery-Custom-File-Input</span></a></b> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/filamentgroup/jQuery-Custom-File-Input/tree/87dfca9b9fa2aa4570531380fa2138f14319a150/js" class="js-rewrite-sha" itemscope="url"><span itemprop="title">js</span></a></span> / <strong class="final-path">jQuery.fileinput.js</strong> <span class="js-clippy mini-icon clippy " data-clipboard-text="js/jQuery.fileinput.js" data-copied-hint="copied!" data-copy-hint="copy to clipboard"></span>
    </div>


      <div class="commit file-history-tease" data-path="js/jQuery.fileinput.js/">
        <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/4137f7daffde77fce06a26a1ac92f9bf?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
        <span class="author"><a href="/scottjehl">scottjehl</a></span>
        <time class="js-relative-date" datetime="2010-11-29T14:56:51-08:00" title="2010-11-29 14:56:51">November 29, 2010</time>
        <div class="commit-title">
            <a href="/filamentgroup/jQuery-Custom-File-Input/commit/f9be31c206d837591025bfc8455d1bb25f43326f" class="message">initial commit</a>
        </div>

        <div class="participation">
          <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong> contributor</a></p>
          
        </div>
        <div id="blob_contributors_box" style="display:none">
          <h2>Users on GitHub who have contributed to this file</h2>
          <ul class="facebox-user-list">
            <li>
              <img height="24" src="https://secure.gravatar.com/avatar/4137f7daffde77fce06a26a1ac92f9bf?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
              <a href="/scottjehl">scottjehl</a>
            </li>
          </ul>
        </div>
      </div>

    <div class="frames">
      <div class="frame frame-center" data-path="js/jQuery.fileinput.js/" data-permalink-url="/filamentgroup/jQuery-Custom-File-Input/blob/87dfca9b9fa2aa4570531380fa2138f14319a150/js/jQuery.fileinput.js" data-title="jQuery-Custom-File-Input/js/jQuery.fileinput.js at master · filamentgroup/jQuery-Custom-File-Input · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon text-file"></b></span>
                <span class="mode" title="File Mode">100644</span>
                  <span>85 lines (79 sloc)</span>
                <span>3.069 kb</span>
              </div>
              <ul class="button-group actions">
                  <li>
                    <a class="grouped-button file-edit-link minibutton bigger lighter js-rewrite-sha" href="/filamentgroup/jQuery-Custom-File-Input/edit/87dfca9b9fa2aa4570531380fa2138f14319a150/js/jQuery.fileinput.js" data-method="post" rel="nofollow"><span>Edit this file</span></a>
                  </li>

                <li>
                  <a href="/filamentgroup/jQuery-Custom-File-Input/raw/master/js/jQuery.fileinput.js" class="minibutton btn-raw grouped-button bigger lighter" id="raw-url"><span><span class="icon"></span>Raw</span></a>
                </li>
                  <li>
                    <a href="/filamentgroup/jQuery-Custom-File-Input/blame/master/js/jQuery.fileinput.js" class="minibutton btn-blame grouped-button bigger lighter"><span><span class="icon"></span>Blame</span></a>
                  </li>
                <li>
                  <a href="/filamentgroup/jQuery-Custom-File-Input/commits/master/js/jQuery.fileinput.js" class="minibutton btn-history grouped-button bigger lighter" rel="nofollow"><span><span class="icon"></span>History</span></a>
                </li>
              </ul>
            </div>
              <div class="data type-javascript">
      <table cellpadding="0" cellspacing="0" class="lines">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
</pre>
          </td>
          <td width="100%">
                <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/**</span></div><div class='line' id='LC2'><span class="cm"> * --------------------------------------------------------------------</span></div><div class='line' id='LC3'><span class="cm"> * jQuery customfileinput plugin</span></div><div class='line' id='LC4'><span class="cm"> * Author: Scott Jehl, scott@filamentgroup.com</span></div><div class='line' id='LC5'><span class="cm"> * Copyright (c) 2009 Filament Group </span></div><div class='line' id='LC6'><span class="cm"> * licensed under MIT (filamentgroup.com/examples/mit-license.txt)</span></div><div class='line' id='LC7'><span class="cm"> * --------------------------------------------------------------------</span></div><div class='line' id='LC8'><span class="cm"> */</span></div><div class='line' id='LC9'><span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">customFileInput</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC10'>	<span class="c1">//apply events and styles for file input element</span></div><div class='line' id='LC11'>	<span class="kd">var</span> <span class="nx">fileInput</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">)</span></div><div class='line' id='LC12'>		<span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">&#39;customfile-input&#39;</span><span class="p">)</span> <span class="c1">//add class for CSS</span></div><div class='line' id='LC13'>		<span class="p">.</span><span class="nx">mouseover</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span> <span class="nx">upload</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">&#39;customfile-hover&#39;</span><span class="p">);</span> <span class="p">})</span></div><div class='line' id='LC14'>		<span class="p">.</span><span class="nx">mouseout</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span> <span class="nx">upload</span><span class="p">.</span><span class="nx">removeClass</span><span class="p">(</span><span class="s1">&#39;customfile-hover&#39;</span><span class="p">);</span> <span class="p">})</span></div><div class='line' id='LC15'>		<span class="p">.</span><span class="nx">focus</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC16'>			<span class="nx">upload</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">&#39;customfile-focus&#39;</span><span class="p">);</span> </div><div class='line' id='LC17'>			<span class="nx">fileInput</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;val&#39;</span><span class="p">,</span> <span class="nx">fileInput</span><span class="p">.</span><span class="nx">val</span><span class="p">());</span></div><div class='line' id='LC18'>		<span class="p">})</span></div><div class='line' id='LC19'>		<span class="p">.</span><span class="nx">blur</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span> </div><div class='line' id='LC20'>			<span class="nx">upload</span><span class="p">.</span><span class="nx">removeClass</span><span class="p">(</span><span class="s1">&#39;customfile-focus&#39;</span><span class="p">);</span></div><div class='line' id='LC21'>			<span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;checkChange&#39;</span><span class="p">);</span></div><div class='line' id='LC22'>		 <span class="p">})</span></div><div class='line' id='LC23'>		 <span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="s1">&#39;disable&#39;</span><span class="p">,</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC24'>		 	<span class="nx">fileInput</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;disabled&#39;</span><span class="p">,</span><span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC25'>			<span class="nx">upload</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">&#39;customfile-disabled&#39;</span><span class="p">);</span></div><div class='line' id='LC26'>		<span class="p">})</span></div><div class='line' id='LC27'>		<span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="s1">&#39;enable&#39;</span><span class="p">,</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC28'>			<span class="nx">fileInput</span><span class="p">.</span><span class="nx">removeAttr</span><span class="p">(</span><span class="s1">&#39;disabled&#39;</span><span class="p">);</span></div><div class='line' id='LC29'>			<span class="nx">upload</span><span class="p">.</span><span class="nx">removeClass</span><span class="p">(</span><span class="s1">&#39;customfile-disabled&#39;</span><span class="p">);</span></div><div class='line' id='LC30'>		<span class="p">})</span></div><div class='line' id='LC31'>		<span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="s1">&#39;checkChange&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC32'>			<span class="k">if</span><span class="p">(</span><span class="nx">fileInput</span><span class="p">.</span><span class="nx">val</span><span class="p">()</span> <span class="o">&amp;&amp;</span> <span class="nx">fileInput</span><span class="p">.</span><span class="nx">val</span><span class="p">()</span> <span class="o">!=</span> <span class="nx">fileInput</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;val&#39;</span><span class="p">)){</span></div><div class='line' id='LC33'>				<span class="nx">fileInput</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;change&#39;</span><span class="p">);</span></div><div class='line' id='LC34'>			<span class="p">}</span></div><div class='line' id='LC35'>		<span class="p">})</span></div><div class='line' id='LC36'>		<span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="s1">&#39;change&#39;</span><span class="p">,</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC37'>			<span class="c1">//get file name</span></div><div class='line' id='LC38'>			<span class="kd">var</span> <span class="nx">fileName</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">val</span><span class="p">().</span><span class="nx">split</span><span class="p">(</span><span class="sr">/\\/</span><span class="p">).</span><span class="nx">pop</span><span class="p">();</span></div><div class='line' id='LC39'>			<span class="c1">//get file extension</span></div><div class='line' id='LC40'>			<span class="kd">var</span> <span class="nx">fileExt</span> <span class="o">=</span> <span class="s1">&#39;customfile-ext-&#39;</span> <span class="o">+</span> <span class="nx">fileName</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;.&#39;</span><span class="p">).</span><span class="nx">pop</span><span class="p">().</span><span class="nx">toLowerCase</span><span class="p">();</span></div><div class='line' id='LC41'>			<span class="c1">//update the feedback</span></div><div class='line' id='LC42'>			<span class="nx">uploadFeedback</span></div><div class='line' id='LC43'>				<span class="p">.</span><span class="nx">text</span><span class="p">(</span><span class="nx">fileName</span><span class="p">)</span> <span class="c1">//set feedback text to filename</span></div><div class='line' id='LC44'>				<span class="p">.</span><span class="nx">removeClass</span><span class="p">(</span><span class="nx">uploadFeedback</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;fileExt&#39;</span><span class="p">)</span> <span class="o">||</span> <span class="s1">&#39;&#39;</span><span class="p">)</span> <span class="c1">//remove any existing file extension class</span></div><div class='line' id='LC45'>				<span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="nx">fileExt</span><span class="p">)</span> <span class="c1">//add file extension class</span></div><div class='line' id='LC46'>				<span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;fileExt&#39;</span><span class="p">,</span> <span class="nx">fileExt</span><span class="p">)</span> <span class="c1">//store file extension for class removal on next change</span></div><div class='line' id='LC47'>				<span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">&#39;customfile-feedback-populated&#39;</span><span class="p">);</span> <span class="c1">//add class to show populated state</span></div><div class='line' id='LC48'>			<span class="c1">//change text of button	</span></div><div class='line' id='LC49'>			<span class="nx">uploadButton</span><span class="p">.</span><span class="nx">text</span><span class="p">(</span><span class="s1">&#39;Change&#39;</span><span class="p">);</span>	</div><div class='line' id='LC50'>		<span class="p">})</span></div><div class='line' id='LC51'>		<span class="p">.</span><span class="nx">click</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span> <span class="c1">//for IE and Opera, make sure change fires after choosing a file, using an async callback</span></div><div class='line' id='LC52'>			<span class="nx">fileInput</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;val&#39;</span><span class="p">,</span> <span class="nx">fileInput</span><span class="p">.</span><span class="nx">val</span><span class="p">());</span></div><div class='line' id='LC53'>			<span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC54'>				<span class="nx">fileInput</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;checkChange&#39;</span><span class="p">);</span></div><div class='line' id='LC55'>			<span class="p">},</span><span class="mi">100</span><span class="p">);</span></div><div class='line' id='LC56'>		<span class="p">});</span></div><div class='line' id='LC57'><br/></div><div class='line' id='LC58'>	<span class="c1">//create custom control container</span></div><div class='line' id='LC59'>	<span class="kd">var</span> <span class="nx">upload</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;&lt;div class=&quot;customfile&quot;&gt;&lt;/div&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC60'>	<span class="c1">//create custom control button</span></div><div class='line' id='LC61'>	<span class="kd">var</span> <span class="nx">uploadButton</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;&lt;span class=&quot;customfile-button&quot; aria-hidden=&quot;true&quot;&gt;Browse&lt;/span&gt;&#39;</span><span class="p">).</span><span class="nx">appendTo</span><span class="p">(</span><span class="nx">upload</span><span class="p">);</span></div><div class='line' id='LC62'>	<span class="c1">//create custom control feedback</span></div><div class='line' id='LC63'>	<span class="kd">var</span> <span class="nx">uploadFeedback</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;&lt;span class=&quot;customfile-feedback&quot; aria-hidden=&quot;true&quot;&gt;No file selected...&lt;/span&gt;&#39;</span><span class="p">).</span><span class="nx">appendTo</span><span class="p">(</span><span class="nx">upload</span><span class="p">);</span></div><div class='line' id='LC64'><br/></div><div class='line' id='LC65'>	<span class="c1">//match disabled state</span></div><div class='line' id='LC66'>	<span class="k">if</span><span class="p">(</span><span class="nx">fileInput</span><span class="p">.</span><span class="nx">is</span><span class="p">(</span><span class="s1">&#39;[disabled]&#39;</span><span class="p">)){</span></div><div class='line' id='LC67'>		<span class="nx">fileInput</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;disable&#39;</span><span class="p">);</span></div><div class='line' id='LC68'>	<span class="p">}</span></div><div class='line' id='LC69'><br/></div><div class='line' id='LC70'><br/></div><div class='line' id='LC71'>	<span class="c1">//on mousemove, keep file input under the cursor to steal click</span></div><div class='line' id='LC72'>	<span class="nx">upload</span></div><div class='line' id='LC73'>		<span class="p">.</span><span class="nx">mousemove</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">){</span></div><div class='line' id='LC74'>			<span class="nx">fileInput</span><span class="p">.</span><span class="nx">css</span><span class="p">({</span></div><div class='line' id='LC75'>				<span class="s1">&#39;left&#39;</span><span class="o">:</span> <span class="nx">e</span><span class="p">.</span><span class="nx">pageX</span> <span class="o">-</span> <span class="nx">upload</span><span class="p">.</span><span class="nx">offset</span><span class="p">().</span><span class="nx">left</span> <span class="o">-</span> <span class="nx">fileInput</span><span class="p">.</span><span class="nx">outerWidth</span><span class="p">()</span> <span class="o">+</span> <span class="mi">20</span><span class="p">,</span> <span class="c1">//position right side 20px right of cursor X)</span></div><div class='line' id='LC76'>				<span class="s1">&#39;top&#39;</span><span class="o">:</span> <span class="nx">e</span><span class="p">.</span><span class="nx">pageY</span> <span class="o">-</span> <span class="nx">upload</span><span class="p">.</span><span class="nx">offset</span><span class="p">().</span><span class="nx">top</span> <span class="o">-</span> <span class="nx">$</span><span class="p">(</span><span class="nb">window</span><span class="p">).</span><span class="nx">scrollTop</span><span class="p">()</span> <span class="o">-</span> <span class="mi">3</span></div><div class='line' id='LC77'>			<span class="p">});</span>	</div><div class='line' id='LC78'>		<span class="p">})</span></div><div class='line' id='LC79'>		<span class="p">.</span><span class="nx">insertAfter</span><span class="p">(</span><span class="nx">fileInput</span><span class="p">);</span> <span class="c1">//insert after the input</span></div><div class='line' id='LC80'><br/></div><div class='line' id='LC81'>	<span class="nx">fileInput</span><span class="p">.</span><span class="nx">appendTo</span><span class="p">(</span><span class="nx">upload</span><span class="p">);</span></div><div class='line' id='LC82'><br/></div><div class='line' id='LC83'>	<span class="c1">//return jQuery</span></div><div class='line' id='LC84'>	<span class="k">return</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC85'><span class="p">};</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>
      </div>
    </div>

  </div>

<div class="frame frame-loading large-loading-area" style="display:none;" data-tree-list-url="/filamentgroup/jQuery-Custom-File-Input/tree-list/87dfca9b9fa2aa4570531380fa2138f14319a150" data-blob-url-prefix="/filamentgroup/jQuery-Custom-File-Input/blob/87dfca9b9fa2aa4570531380fa2138f14319a150">
  <img src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-64.gif?1329872007" height="64" width="64">
</div>

      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer" >
        
  <div class="upper_footer">
     <div class="container clearfix">

       <!--[if IE]><h4 id="blacktocat_ie">GitHub Links</h4><![endif]-->
       <![if !IE]><h4 id="blacktocat">GitHub Links</h4><![endif]>

       <ul class="footer_nav">
         <h4>GitHub</h4>
         <li><a href="https://github.com/about">About</a></li>
         <li><a href="https://github.com/blog">Blog</a></li>
         <li><a href="https://github.com/features">Features</a></li>
         <li><a href="https://github.com/contact">Contact &amp; Support</a></li>
         <li><a href="https://github.com/training">Training</a></li>
         <li><a href="http://enterprise.github.com/">GitHub Enterprise</a></li>
         <li><a href="http://status.github.com/">Site Status</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Tools</h4>
         <li><a href="http://get.gaug.es/">Gauges: Analyze web traffic</a></li>
         <li><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></li>
         <li><a href="https://gist.github.com">Gist: Code snippets</a></li>
         <li><a href="http://mac.github.com/">GitHub for Mac</a></li>
         <li><a href="http://mobile.github.com/">Issues for iPhone</a></li>
         <li><a href="http://jobs.github.com/">Job Board</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Extras</h4>
         <li><a href="http://shop.github.com/">GitHub Shop</a></li>
         <li><a href="http://octodex.github.com/">The Octodex</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Documentation</h4>
         <li><a href="http://help.github.com/">GitHub Help</a></li>
         <li><a href="http://developer.github.com/">Developer API</a></li>
         <li><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></li>
         <li><a href="http://pages.github.com/">GitHub Pages</a></li>
       </ul>

     </div><!-- /.site -->
  </div><!-- /.upper_footer -->

<div class="lower_footer">
  <div class="container clearfix">
    <!--[if IE]><div id="legal_ie"><![endif]-->
    <![if !IE]><div id="legal"><![endif]>
      <ul>
          <li><a href="https://github.com/site/terms">Terms of Service</a></li>
          <li><a href="https://github.com/site/privacy">Privacy</a></li>
          <li><a href="https://github.com/security">Security</a></li>
      </ul>

      <p>&copy; 2012 <span title="0.11439s from fe9.rs.github.com">GitHub</span> Inc. All rights reserved.</p>
    </div><!-- /#legal or /#legal_ie-->

      <div class="sponsor">
        <a href="http://www.rackspace.com" class="logo">
          <img alt="Dedicated Server" height="36" src="https://a248.e.akamai.net/assets.github.com/images/modules/footer/rackspaces_logo.png?1329521039" width="38" />
        </a>
        Powered by the <a href="http://www.rackspace.com ">Dedicated
        Servers</a> and<br/> <a href="http://www.rackspacecloud.com">Cloud
        Computing</a> of Rackspace Hosting<span>&reg;</span>
      </div>
  </div><!-- /.site -->
</div><!-- /.lower_footer -->

      </div><!-- /#footer -->

    

<div id="keyboard_shortcuts_pane" class="instapaper_ignore readability-extra" style="display:none">
  <h2>Keyboard Shortcuts <small><a href="#" class="js-see-all-keyboard-shortcuts">(see all)</a></small></h2>

  <div class="columns threecols">
    <div class="column first">
      <h3>Site wide shortcuts</h3>
      <dl class="keyboard-mappings">
        <dt>s</dt>
        <dd>Focus site search</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>?</dt>
        <dd>Bring up this help dialog</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column middle" style='display:none'>
      <h3>Commit list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>c <em>or</em> o <em>or</em> enter</dt>
        <dd>Open commit</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>y</dt>
        <dd>Expand URL to its canonical form</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column last" style='display:none'>
      <h3>Pull request list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>o <em>or</em> enter</dt>
        <dd>Open issue</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
        <dd>Submit comment</dd>
      </dl>
    </div><!-- /.columns.last -->

  </div><!-- /.columns.equacols -->

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Issues</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>x</dt>
          <dd>Toggle selection</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>c</dt>
          <dd>Create issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Create label</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>i</dt>
          <dd>Back to inbox</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>u</dt>
          <dd>Back to issues</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>/</dt>
          <dd>Focus issues search</dd>
        </dl>
      </div>
    </div>
  </div>

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Issues Dashboard</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Network Graph</h3>
    <div class="columns equacols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt><span class="badmono">←</span> <em>or</em> h</dt>
          <dd>Scroll left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">→</span> <em>or</em> l</dt>
          <dd>Scroll right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↑</span> <em>or</em> k</dt>
          <dd>Scroll up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↓</span> <em>or</em> j</dt>
          <dd>Scroll down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Toggle visibility of head labels</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">←</span> <em>or</em> shift h</dt>
          <dd>Scroll all the way left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">→</span> <em>or</em> shift l</dt>
          <dd>Scroll all the way right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↑</span> <em>or</em> shift k</dt>
          <dd>Scroll all the way up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↓</span> <em>or</em> shift j</dt>
          <dd>Scroll all the way down</dd>
        </dl>
      </div><!-- /.column.last -->
    </div>
  </div>

  <div >
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first" >
        <h3>Source Code Browsing</h3>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Activates the file finder</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Jump to line</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>w</dt>
          <dd>Switch branch/tag</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Expand URL to its canonical form</dd>
        </dl>
      </div>
    </div>
  </div>

  <div style='display:none'>
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first">
        <h3>Browsing Commits</h3>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>escape</dt>
          <dd>Close form</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>p</dt>
          <dd>Parent commit</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o</dt>
          <dd>Other parent commit</dd>
        </dl>
      </div>
    </div>
  </div>
</div>

    <div id="markdown-help" class="instapaper_ignore readability-extra">
  <h2>Markdown Cheat Sheet</h2>

  <div class="cheatsheet-content">

  <div class="mod">
    <div class="col">
      <h3>Format Text</h3>
      <p>Headers</p>
      <pre>
# This is an &lt;h1&gt; tag
## This is an &lt;h2&gt; tag
###### This is an &lt;h6&gt; tag</pre>
     <p>Text styles</p>
     <pre>
*This text will be italic*
_This will also be italic_
**This text will be bold**
__This will also be bold__

*You **can** combine them*
</pre>
    </div>
    <div class="col">
      <h3>Lists</h3>
      <p>Unordered</p>
      <pre>
* Item 1
* Item 2
  * Item 2a
  * Item 2b</pre>
     <p>Ordered</p>
     <pre>
1. Item 1
2. Item 2
3. Item 3
   * Item 3a
   * Item 3b</pre>
    </div>
    <div class="col">
      <h3>Miscellaneous</h3>
      <p>Images</p>
      <pre>
![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)
</pre>
     <p>Links</p>
     <pre>
http://github.com - automatic!
[GitHub](http://github.com)</pre>
<p>Blockquotes</p>
     <pre>
As Kanye West said:

> We're living the future so
> the present is our past.
</pre>
    </div>
  </div>
  <div class="rule"></div>

  <h3>Code Examples in Markdown</h3>
  <div class="col">
      <p>Syntax highlighting with <a href="http://github.github.com/github-flavored-markdown/" title="GitHub Flavored Markdown" target="_blank">GFM</a></p>
      <pre>
```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```</pre>
    </div>
    <div class="col">
      <p>Or, indent your code 4 spaces</p>
      <pre>
Here is a Python code example
without syntax highlighting:

    def foo:
      if not bar:
        return true</pre>
    </div>
    <div class="col">
      <p>Inline code for comments</p>
      <pre>
I think you should use an
`&lt;addr&gt;` element here instead.</pre>
    </div>
  </div>

  </div>
</div>


    <div class="ajax-error-message">
      <p><span class="icon"></span> Something went wrong with that request. Please try again. <a href="javascript:;" class="ajax-error-dismiss">Dismiss</a></p>
    </div>

    <div id="logo-popup">
      <h2>Looking for the GitHub logo?</h2>
      <ul>
        <li>
          <h4>GitHub Logo</h4>
          <a href="http://github-media-downloads.s3.amazonaws.com/GitHub_Logos.zip"><img alt="Github_logo" src="https://a248.e.akamai.net/assets.github.com/images/modules/about_page/github_logo.png?1315867479" /></a>
          <a href="http://github-media-downloads.s3.amazonaws.com/GitHub_Logos.zip" class="minibutton btn-download download"><span><span class="icon"></span>Download</span></a>
        </li>
        <li>
          <h4>The Octocat</h4>
          <a href="http://github-media-downloads.s3.amazonaws.com/Octocats.zip"><img alt="Octocat" src="https://a248.e.akamai.net/assets.github.com/images/modules/about_page/octocat.png?1315867479" /></a>
          <a href="http://github-media-downloads.s3.amazonaws.com/Octocats.zip" class="minibutton btn-download download"><span><span class="icon"></span>Download</span></a>
        </li>
      </ul>
    </div>

    
    
    
    <span id='server_response_time' data-time='0.11744' data-host='fe9'></span>
  </body>
</html>

