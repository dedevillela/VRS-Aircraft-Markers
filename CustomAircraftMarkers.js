<script type="text/javascript">
    if(VRS && VRS.globalDispatch && VRS.serverConfig) {
        VRS.globalDispatch.hook(VRS.globalEvent.bootstrapCreated, function(bootStrap) {
            if(VRS.globalOptions && VRS.globalOptions.aircraftMarkers) {

            	VRS.globalOptions.aircraftMarkers.unshift(new VRS.AircraftMarker({
					normalFileName: 'M-Helicopter.png',
					selectedFileName: 'M-Helicopter-Selected.png',
					size: { width: 32, height: 32 },
					matches: function(/** VRS.Aircraft */ aircraft) { return  aircraft.wakeTurbulenceCat.val === VRS.WakeTurbulenceCategory.Light && aircraft.species.val === VRS.Species.Helicopter && aircraft.isMlat.val }
				}));

				VRS.globalOptions.aircraftMarkers.unshift(new VRS.AircraftMarker({
					normalFileName: 'M-WTC-Light-1-Prop.png',
					selectedFileName: 'M-WTC-Light-1-Prop-Selected.png',
					size: { width: 32, height: 32 },
					matches: function(/** VRS.Aircraft */ aircraft) { return  aircraft.wakeTurbulenceCat.val === VRS.WakeTurbulenceCategory.Light && aircraft.countEngines.val === '1' && aircraft.engineType.val === VRS.EngineType.Turbo && aircraft.isMlat.val }
				}));

				VRS.globalOptions.aircraftMarkers.unshift(new VRS.AircraftMarker({
					normalFileName: 'M-WTC-Light-2-Prop.png',
					selectedFileName: 'M-WTC-Light-2-Prop-Selected.png',
					size: { width: 40, height: 40 },
					matches: function(/** VRS.Aircraft */ aircraft) { return  aircraft.wakeTurbulenceCat.val === VRS.WakeTurbulenceCategory.Light && aircraft.countEngines.val === '2' && aircraft.engineType.val === VRS.EngineType.Turbo && aircraft.isMlat.val }
				}));

				VRS.globalOptions.aircraftMarkers.unshift(new VRS.AircraftMarker({
					normalFileName: 'M-WTC-Medium-2-Turbo.png',
					selectedFileName: 'M-WTC-Medium-2-Turbo-Selected.png',
					size: { width: 40, height: 40 },
					matches: function(/** VRS.Aircraft */ aircraft) { return  aircraft.wakeTurbulenceCat.val === VRS.WakeTurbulenceCategory.Medium && aircraft.countEngines.val === '2' && aircraft.engineType.val === VRS.EngineType.Turbo && aircraft.isMlat.val }
				}));

				VRS.globalOptions.aircraftMarkers.unshift(new VRS.AircraftMarker({
					normalFileName: 'M-Type-GLFx.png',
					selectedFileName: 'M-Type-GLFx-Selected.png',
					size: { width: 40, height: 40 },
					matches: function(/** VRS.Aircraft */ aircraft) { return  aircraft.wakeTurbulenceCat.val === VRS.WakeTurbulenceCategory.Light && aircraft.countEngines.val === '2' && aircraft.engineType.val === VRS.EngineType.Jet && aircraft.isMlat.val }
				}));

				VRS.globalOptions.aircraftMarkers.unshift(new VRS.AircraftMarker({
					normalFileName: 'M-WTC-Medium-2-Jet.png',
					selectedFileName: 'M-WTC-Medium-2-Jet-Selected.png',
					size: { width: 40, height: 40 },
					matches: function(/** VRS.Aircraft */ aircraft) { return aircraft.wakeTurbulenceCat.val === VRS.WakeTurbulenceCategory.Medium && aircraft.countEngines.val === '2' && aircraft.engineType.val === VRS.EngineType.Jet && aircraft.isMlat.val }
				}));

				VRS.globalOptions.aircraftMarkers.unshift(new VRS.AircraftMarker({
					normalFileName: 'M-Type-GLFx.png',
					selectedFileName: 'M-Type-GLFx-Selected.png',
					size: { width: 40, height: 40 },
					matches: function(/** VRS.Aircraft */ aircraft) { return  aircraft.wakeTurbulenceCat.val === VRS.WakeTurbulenceCategory.Medium && aircraft.countEngines.val === '2' && aircraft.engineType.val === VRS.EngineType.Jet && aircraft.modelIcao.val === 'G150' || aircraft.modelIcao.val === 'C560' || aircraft.modelIcao.val === 'C650' || aircraft.modelIcao.val === 'GALX' || aircraft.modelIcao.val === 'C750' || aircraft.modelIcao.val === 'CL30' || aircraft.modelIcao.val === 'CL35' || aircraft.modelIcao.val === 'CL60' && aircraft.isMlat.val }
				}));

				VRS.globalOptions.aircraftMarkers.unshift(new VRS.AircraftMarker({
					normalFileName: 'M-4-TurboProp.png',
					selectedFileName: 'M-4-TurboProp-Selected.png',
					size: { width: 40, height: 40 },
					matches: function(/** VRS.Aircraft */ aircraft) { return  aircraft.wakeTurbulenceCat.val === VRS.WakeTurbulenceCategory.Medium && aircraft.countEngines.val === '4' && aircraft.engineType.val === VRS.EngineType.Turbo && aircraft.isMlat.val }
				}));				

				VRS.globalOptions.aircraftMarkers.unshift(new VRS.AircraftMarker({
					normalFileName: 'WTC-Medium-2-T-Jet.png',
					selectedFileName: 'WTC-Medium-2-T-Jet-Selected.png',
					size: { width: 40, height: 40 },
					matches: function(/** VRS.Aircraft */ aircraft) { return aircraft.wakeTurbulenceCat.val === VRS.WakeTurbulenceCategory.Medium && aircraft.countEngines.val === '2' && aircraft.engineType.val === VRS.EngineType.Jet && aircraft.modelIcao.val === 'GLEX' }
				}));

				VRS.globalOptions.aircraftMarkers.unshift(new VRS.AircraftMarker({
					normalFileName: 'M-WTC-Medium-2-T-Jet.png',
					selectedFileName: 'M-WTC-Medium-2-T-Jet-Selected.png',
					size: { width: 40, height: 40 },
					matches: function(/** VRS.Aircraft */ aircraft) { return aircraft.wakeTurbulenceCat.val === VRS.WakeTurbulenceCategory.Medium && aircraft.countEngines.val === '2' && aircraft.engineType.val === VRS.EngineType.Jet && aircraft.modelIcao.val === 'GLEX' && aircraft.isMlat.val }
				}));

				VRS.globalOptions.aircraftMarkers.unshift(new VRS.AircraftMarker({
					normalFileName: 'M-WTC-Medium-4-Jet.png',
					selectedFileName: 'M-WTC-Medium-4-Jet-Selected.png',
					size: { width: 40, height: 40 },
					matches: function(/** VRS.Aircraft */ aircraft) { return  aircraft.wakeTurbulenceCat.val === VRS.WakeTurbulenceCategory.Medium && aircraft.countEngines.val === '4' && aircraft.engineType.val === VRS.EngineType.Jet && aircraft.isMlat.val }
				}));

				VRS.globalOptions.aircraftMarkers.unshift(new VRS.AircraftMarker({
					normalFileName: 'M-WTC-Heavy-2-Jet.png',
					selectedFileName: 'M-WTC-Heavy-2-Jet-Selected.png',
					size: { width: 40, height: 40 },
					matches: function(/** VRS.Aircraft */ aircraft) { return  aircraft.wakeTurbulenceCat.val === VRS.WakeTurbulenceCategory.Heavy && aircraft.countEngines.val === '2' && aircraft.engineType.val === VRS.EngineType.Jet && aircraft.isMlat.val }
				}));

				VRS.globalOptions.aircraftMarkers.unshift(new VRS.AircraftMarker({
					normalFileName: 'M-WTC-Heavy-4-Jet.png',
					selectedFileName: 'M-WTC-Heavy-4-Jet-Selected.png',
					size: { width: 60, height: 60 },
					matches: function(/** VRS.Aircraft */ aircraft) { return  aircraft.wakeTurbulenceCat.val === VRS.WakeTurbulenceCategory.Heavy && aircraft.countEngines.val === '4' && aircraft.engineType.val === VRS.EngineType.Jet && aircraft.isMlat.val }
				}));

				VRS.globalOptions.aircraftMarkers.unshift(new VRS.AircraftMarker({
                    normalFileName: 'M-Type-A340.png',
                    selectedFileName: 'M-Type-A340-Selected.png',
                    size: { width: 60, height: 60 },
                    matches: function(/** VRS.Aircraft */ aircraft) { return  aircraft.wakeTurbulenceCat.val === VRS.WakeTurbulenceCategory.Heavy && aircraft.countEngines.val === '4' && aircraft.engineType.val === VRS.EngineType.Jet && aircraft.modelIcao.val === 'A342' || aircraft.modelIcao.val === 'A343' || aircraft.modelIcao.val === 'A345' || aircraft.modelIcao.val === 'A346' || aircraft.modelIcao.val === 'B703' || aircraft.modelIcao.val === 'DC85' || aircraft.modelIcao.val === 'DC86' || aircraft.modelIcao.val === 'DC87' && aircraft.isMlat.val }
                }));

                VRS.globalOptions.aircraftMarkers.unshift(new VRS.AircraftMarker({
                    normalFileName: 'M-Type-A380.png',
                    selectedFileName: 'M-Type-A380-Selected.png',
                    size: { width: 60, height: 60 },
                    matches: function(/** VRS.Aircraft */ aircraft) { return  aircraft.wakeTurbulenceCat.val === VRS.WakeTurbulenceCategory.Heavy && aircraft.countEngines.val === '4' && aircraft.engineType.val === VRS.EngineType.Jet && aircraft.modelIcao.val === 'A124' || aircraft.modelIcao.val === 'A380' || aircraft.modelIcao.val === 'A388' && aircraft.isMlat.val }
                }));

            }
        });
    }      
</script>