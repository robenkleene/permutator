{
	"patcher" : 	{
		"fileversion" : 1,
		"appversion" : 		{
			"major" : 9,
			"minor" : 0,
			"revision" : 3,
			"architecture" : "x64",
			"modernui" : 1
		}
,
		"classnamespace" : "box",
		"rect" : [ 328.0, 166.0, 970.0, 803.0 ],
		"default_fontsize" : 10.0,
		"default_fontname" : "Arial Bold",
		"gridsize" : [ 8.0, 8.0 ],
		"gridsnaponopen" : 2,
		"objectsnaponopen" : 0,
		"subpatcher_template" : "roben-kleene-max-for-live",
		"boxes" : [ 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-1",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "Permutator Module.maxpat",
					"numinlets" : 0,
					"numoutlets" : 0,
					"offset" : [ 0.0, 0.0 ],
					"patching_rect" : [ 0.0, 0.0, 424.0, 328.0 ],
					"viewvisibility" : 1
				}

			}
 ],
		"lines" : [  ],
		"originid" : "pat-24370",
		"parameters" : 		{
			"obj-1::obj-1" : [ "Scan", "Scan", 0 ],
			"parameterbanks" : 			{
				"0" : 				{
					"index" : 0,
					"name" : "",
					"parameters" : [ "-", "-", "-", "-", "-", "-", "-", "-" ]
				}

			}
,
			"inherited_shortname" : 1
		}
,
		"dependency_cache" : [ 			{
				"name" : "Permutator Module.maxpat",
				"bootpath" : "/Users/Shared/Max 9/Packages/permutator/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "inspector_pathget_devices.js",
				"bootpath" : "/Users/Shared/Max 9/Packages/inspector-pathget/javascript",
				"patcherrelativepath" : "../../inspector-pathget/javascript",
				"type" : "TEXT",
				"implicit" : 1
			}
 ],
		"autosave" : 0
	}

}
