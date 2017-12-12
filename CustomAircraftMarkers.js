if (typeof VRS === "undefined" && VRS.globalDispatch && VRS.serverConfig) {
	VRS.globalDispatch.hook(VRS.globalEvent.bootstrapCreated, function() {
		if (VRS.globalOptions && VRS.globalOptions.aircraftMarkers) {
                
                /////////////////////////////
                /* WTC LIGHT 1 PROP - MLAT */
                /////////////////////////////
                VRS.globalOptions.aircraftMarkers.unshift(new VRS.AircraftMarker({
                    normalFileName: 'M-WTC-Light-1-Prop.png',
                    selectedFileName: 'M-WTC-Light-1-Prop-Selected.png',
                    size: {
                        width: 32,
                        height: 32
                    },
                    matches: function( /** VRS.Aircraft */ aircraft) {
                        return aircraft.wakeTurbulenceCat.val === VRS.WakeTurbulenceCategory.Light && aircraft.countEngines.val === '1' && aircraft.engineType.val === VRS.EngineType.Turbo && aircraft.isMlat.val
                    }
                }));

                /////////////////////////////
                /* WTC LIGHT 2 PROP - MLAT */
                /////////////////////////////
                VRS.globalOptions.aircraftMarkers.unshift(new VRS.AircraftMarker({
                    normalFileName: 'M-WTC-Light-2-Prop.png',
                    selectedFileName: 'M-WTC-Light-2-Prop-Selected.png',
                    size: {
                        width: 40,
                        height: 40
                    },
                    matches: function( /** VRS.Aircraft */ aircraft) {
                        return aircraft.wakeTurbulenceCat.val === VRS.WakeTurbulenceCategory.Light && aircraft.countEngines.val === '2' && aircraft.engineType.val === VRS.EngineType.Turbo && aircraft.isMlat.val
                    }
                }));

                ///////////////////////////////
                /* WTC MEDIUM 2 TURBO - MLAT */
                ///////////////////////////////
                VRS.globalOptions.aircraftMarkers.unshift(new VRS.AircraftMarker({
                    normalFileName: 'M-WTC-Medium-2-Turbo.png',
                    selectedFileName: 'M-WTC-Medium-2-Turbo-Selected.png',
                    size: {
                        width: 40,
                        height: 40
                    },
                    matches: function( /** VRS.Aircraft */ aircraft) {
                        return aircraft.wakeTurbulenceCat.val === VRS.WakeTurbulenceCategory.Medium && aircraft.countEngines.val === '2' && aircraft.engineType.val === VRS.EngineType.Turbo && aircraft.isMlat.val
                    }
                }));

                ////////////////////////////
                /* WTC LIGHT 2 JET - MLAT */
                ////////////////////////////
                VRS.globalOptions.aircraftMarkers.unshift(new VRS.AircraftMarker({
                    normalFileName: 'M-Type-GLFx.png',
                    selectedFileName: 'M-Type-GLFx-Selected.png',
                    size: {
                        width: 40,
                        height: 40
                    },
                    matches: function( /** VRS.Aircraft */ aircraft) {
                        return aircraft.wakeTurbulenceCat.val === VRS.WakeTurbulenceCategory.Light && aircraft.countEngines.val === '2' && aircraft.engineType.val === VRS.EngineType.Jet && aircraft.isMlat.val
                    }
                }));

                /////////////////////////////
                /* WTC MEDIUM 2 JET - MLAT */
                /////////////////////////////
                VRS.globalOptions.aircraftMarkers.unshift(new VRS.AircraftMarker({
                    normalFileName: 'M-WTC-Medium-2-Jet.png',
                    selectedFileName: 'M-WTC-Medium-2-Jet-Selected.png',
                    size: {
                        width: 40,
                        height: 40
                    },
                    matches: function( /** VRS.Aircraft */ aircraft) {
                        return aircraft.wakeTurbulenceCat.val === VRS.WakeTurbulenceCategory.Medium && aircraft.countEngines.val === '2' && aircraft.engineType.val === VRS.EngineType.Jet && aircraft.isMlat.val
                    }
                }));
		
		///////////////////////////////////////////////////////////
                /* GALX, G200, CL30, CL35, CL60, C56X, C750, GLF2, GLF3 - MLAT */
                ///////////////////////////////////////////////////////////
                VRS.globalOptions.aircraftMarkers.unshift(new VRS.AircraftMarker({
                    normalFileName: 'M-Type-GLFx.png',
                    selectedFileName: 'M-Type-GLFx-Selected.png',
                    size: {
                        width: 40,
                        height: 40
                    },
                    matches: function( /** VRS.Aircraft */ aircraft) {
                        return aircraft.modelIcao.val === 'GALX' || aircraft.modelIcao.val === 'G150' || aircraft.modelIcao.val === 'G200' || aircraft.modelIcao.val === 'CL30' || aircraft.modelIcao.val === 'CL35' || aircraft.modelIcao.val === 'CL60' || aircraft.modelIcao.val === 'C680' || aircraft.modelIcao.val === 'C750' || aircraft.modelIcao.val === 'C56X' || aircraft.modelIcao.val === 'BE40' || aircraft.modelIcao.val === 'LJ31' || aircraft.modelIcao.val === 'LJ45' || aircraft.modelIcao.val === 'LJ60' && aircraft.isMlat.val
                    }
                }));

                ///////////////////////////////////
                /* WTC MEDIUM 4 TURBOPROP - MLAT */
                ///////////////////////////////////
                VRS.globalOptions.aircraftMarkers.unshift(new VRS.AircraftMarker({
                    normalFileName: 'M-4-TurboProp.png',
                    selectedFileName: 'M-4-TurboProp-Selected.png',
                    size: {
                        width: 40,
                        height: 40
                    },
                    matches: function( /** VRS.Aircraft */ aircraft) {
                        return aircraft.wakeTurbulenceCat.val === VRS.WakeTurbulenceCategory.Medium && aircraft.countEngines.val === '4' && aircraft.engineType.val === VRS.EngineType.Turbo && aircraft.isMlat.val
                    }
                }));

                ///////////////////////////////////////////////////////////////////////
                /* GLEX, GL5T, GLF4, GLF5, GLF6, F2TH, FA5X, FA7X, FA50, F900 - MLAT */
                ///////////////////////////////////////////////////////////////////////
                VRS.globalOptions.aircraftMarkers.unshift(new VRS.AircraftMarker({
                    normalFileName: 'M-GLEX.png',
                    selectedFileName: 'M-GLEX-Selected.png',
                    size: {
                        width: 40,
                        height: 40
                    },
                    matches: function( /** VRS.Aircraft */ aircraft) {
                        return aircraft.modelIcao.val === 'GLEX' || aircraft.modelIcao.val === 'GL5T' || aircraft.modelIcao.val === 'GLF4' || aircraft.modelIcao.val === 'GLF5' || aircraft.modelIcao.val === 'GLF6' || aircraft.modelIcao.val === 'F2TH' || aircraft.modelIcao.val === 'FA5X' || aircraft.modelIcao.val === 'FA50' || aircraft.modelIcao.val === 'F900' || aircraft.modelIcao.val === 'FA7X' && aircraft.isMlat.val
                    }
                }));
                ////////////////////////////////////////////////////////////////
                /* GLEX, GL5T, GLF4, GLF5, GLF6, F2TH, FA5X, FA7X, FA50, F900 */
                ////////////////////////////////////////////////////////////////
                VRS.globalOptions.aircraftMarkers.unshift(new VRS.AircraftMarker({
                    normalFileName: 'GLEX.png',
                    selectedFileName: 'GLEX-Selected.png',
                    size: {
                        width: 40,
                        height: 40
                    },
                    matches: function( /** VRS.Aircraft */ aircraft) {
                        return aircraft.modelIcao.val === 'GLEX' || aircraft.modelIcao.val === 'GL5T' || aircraft.modelIcao.val === 'GLF4' || aircraft.modelIcao.val === 'GLF5' || aircraft.modelIcao.val === 'GLF6' || aircraft.modelIcao.val === 'F2TH' || aircraft.modelIcao.val === 'FA5X' || aircraft.modelIcao.val === 'FA7X' || aircraft.modelIcao.val === 'FA50' || aircraft.modelIcao.val === 'F900'
                    }
                }));

                /////////////////////////////
                /* E135, E35L, E145 - MLAT */
                /////////////////////////////
                VRS.globalOptions.aircraftMarkers.unshift(new VRS.AircraftMarker({
                    normalFileName: 'M-E135.png',
                    selectedFileName: 'M-E135-Selected.png',
                    size: {
                        width: 40,
                        height: 40
                    },
                    matches: function( /** VRS.Aircraft */ aircraft) {
                        return aircraft.modelIcao.val === 'E135' || aircraft.modelIcao.val === 'E35L' || aircraft.modelIcao.val === 'E145' && aircraft.isMlat.val
                    }
                }));
                //////////////////////
                /* E135, E35L, E145 */
                //////////////////////
                VRS.globalOptions.aircraftMarkers.unshift(new VRS.AircraftMarker({
                    normalFileName: 'E135.png',
                    selectedFileName: 'E135-Selected.png',
                    size: {
                        width: 40,
                        height: 40
                    },
                    matches: function( /** VRS.Aircraft */ aircraft) {
                        return aircraft.modelIcao.val === 'E135' || aircraft.modelIcao.val === 'E35L' || aircraft.modelIcao.val === 'E145'
                    }
                }));

                ///////////////////
                /* KC-390 - MLAT */
                ///////////////////
                VRS.globalOptions.aircraftMarkers.unshift(new VRS.AircraftMarker({
                    normalFileName: 'M-E39.png',
                    selectedFileName: 'M-E39-Selected.png',
                    size: {
                        width: 40,
                        height: 40
                    },
                    matches: function( /** VRS.Aircraft */ aircraft) {
                        return aircraft.modelIcao.val === 'E39' && aircraft.isMlat.val
                    }
                }));

                ////////////
                /* KC-390 */
                ////////////
                VRS.globalOptions.aircraftMarkers.unshift(new VRS.AircraftMarker({
                    normalFileName: 'E39.png',
                    selectedFileName: 'E39-Selected.png',
                    size: {
                        width: 40,
                        height: 40
                    },
                    matches: function( /** VRS.Aircraft */ aircraft) {
                        return aircraft.modelIcao.val === 'E39'
                    }
                }));

                /////////////////////////////
                /* WTC MEDIUM 4 JET - MLAT */
                /////////////////////////////
                VRS.globalOptions.aircraftMarkers.unshift(new VRS.AircraftMarker({
                    normalFileName: 'M-WTC-Medium-4-Jet.png',
                    selectedFileName: 'M-WTC-Medium-4-Jet-Selected.png',
                    size: {
                        width: 40,
                        height: 40
                    },
                    matches: function( /** VRS.Aircraft */ aircraft) {
                        return aircraft.wakeTurbulenceCat.val === VRS.WakeTurbulenceCategory.Medium && aircraft.countEngines.val === '4' && aircraft.engineType.val === VRS.EngineType.Jet && aircraft.isMlat.val
                    }
                }));

                ////////////////////////////
                /* WTC HEAVY 2 JET - MLAT */
                ////////////////////////////
                VRS.globalOptions.aircraftMarkers.unshift(new VRS.AircraftMarker({
                    normalFileName: 'M-WTC-Heavy-2-Jet.png',
                    selectedFileName: 'M-WTC-Heavy-2-Jet-Selected.png',
                    size: {
                        width: 40,
                        height: 40
                    },
                    matches: function( /** VRS.Aircraft */ aircraft) {
                        return aircraft.wakeTurbulenceCat.val === VRS.WakeTurbulenceCategory.Heavy && aircraft.countEngines.val === '2' && aircraft.engineType.val === VRS.EngineType.Jet && aircraft.isMlat.val
                    }
                }));

                ////////////////////////////
                /* WTC HEAVY 4 JET - MLAT */
                ////////////////////////////
                VRS.globalOptions.aircraftMarkers.unshift(new VRS.AircraftMarker({
                    normalFileName: 'M-WTC-Heavy-4-Jet.png',
                    selectedFileName: 'M-WTC-Heavy-4-Jet-Selected.png',
                    size: {
                        width: 60,
                        height: 60
                    },
                    matches: function( /** VRS.Aircraft */ aircraft) {
                        return aircraft.wakeTurbulenceCat.val === VRS.WakeTurbulenceCategory.Heavy && aircraft.countEngines.val === '4' && aircraft.engineType.val === VRS.EngineType.Jet && aircraft.isMlat.val
                    }
                }));

                /////////////////
                /* A380 - MLAT */
                /////////////////
                VRS.globalOptions.aircraftMarkers.unshift(new VRS.AircraftMarker({
                    normalFileName: 'M-Type-A380.png',
                    selectedFileName: 'M-Type-A380-Selected.png',
                    size: {
                        width: 60,
                        height: 60
                    },
                    matches: function( /** VRS.Aircraft */ aircraft) {
                        return aircraft.modelIcao.val === 'A124' || aircraft.modelIcao.val === 'A380' || aircraft.modelIcao.val === 'A388' && aircraft.isMlat.val
                    }
                }));

                /////////////////
                /* A225 - MLAT */
                /////////////////
                VRS.globalOptions.aircraftMarkers.unshift(new VRS.AircraftMarker({
                    normalFileName: 'M-A225.png',
                    selectedFileName: 'M-A225-Selected.png',
                    size: {
                        width: 60,
                        height: 60
                    },
                    matches: function( /** VRS.Aircraft */ aircraft) {
                        return aircraft.modelIcao.val === 'A225' && aircraft.isMlat.val
                    }
                }));

                //////////
                /* A225 */
                //////////
                VRS.globalOptions.aircraftMarkers.unshift(new VRS.AircraftMarker({
                    normalFileName: 'A225.png',
                    selectedFileName: 'A225-Selected.png',
                    size: {
                        width: 60,
                        height: 60
                    },
                    matches: function( /** VRS.Aircraft */ aircraft) {
                        return aircraft.modelIcao.val === 'A225'
                    }
                }));

                ///////////////////////
                /* HELICOPTER - MLAT */
                ///////////////////////
                VRS.globalOptions.aircraftMarkers.unshift(new VRS.AircraftMarker({
                    normalFileName: 'M-Helicopter.png',
                    selectedFileName: 'M-Helicopter-Selected.png',
                    size: {
                        width: 32,
                        height: 32
                    },
                    matches: function( /** VRS.Aircraft */ aircraft) {
                        return aircraft.modelIcao.val === 'AS50' || aircraft.modelIcao.val === 'AS65' || aircraft.modelIcao.val === 'B06' || aircraft.modelIcao.val === 'EC20' || aircraft.modelIcao.val === 'EC35' || aircraft.modelIcao.val === 'EC45' || aircraft.modelIcao.val === 'R22' || aircraft.modelIcao.val === 'R44' || aircraft.modelIcao.val === 'R66' || aircraft.modelIcao.val === 'S76' && aircraft.isMlat.val
                        //return aircraft.species.val === VRS.Species.Helicopter && aircraft.isMlat.val
                    }
                }));
		}
	});
}
