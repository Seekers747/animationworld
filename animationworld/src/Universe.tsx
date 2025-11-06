import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { Suspense, useState } from 'react'
// @ts-ignore
import Earth from './components/Earth'
// @ts-ignore
import Sun from './components/Sun' 
import { Bloom, EffectComposer } from '@react-three/postprocessing'

const links = {
    earth: 'https://en.wikipedia.org/wiki/Earth', planet: 'https://en.wikipedia.org/wiki/Planet', sun: 'https://en.wikipedia.org/wiki/Sun', astronomicalObject: 'https://en.wikipedia.org/wiki/Astronomical_object', oceanWorld: 'https://en.wikipedia.org/wiki/Ocean_world', solarSystem: 'https://en.wikipedia.org/wiki/Solar_System', surfaceWater: 'https://en.wikipedia.org/wiki/Surface_water', waterDistribution: 'https://en.wikipedia.org/wiki/Water_distribution_on_Earth', crust: 'https://en.wikipedia.org/wiki/Earth%27s_crust', continent: 'https://en.wikipedia.org/wiki/Continent', landmass: 'https://en.wikipedia.org/wiki/Landmass', landHemisphere: 'https://en.wikipedia.org/wiki/Land_and_water_hemispheres', humidity: 'https://en.wikipedia.org/wiki/Humidity', iceSheet: 'https://en.wikipedia.org/wiki/Ice_sheet', polarDesert: 'https://en.wikipedia.org/wiki/Polar_desert', groundwater: 'https://en.wikipedia.org/wiki/Groundwater', plateTectonics: 'https://en.wikipedia.org/wiki/Plate_tectonics', volcano: 'https://en.wikipedia.org/wiki/Volcano', outerCore: 'https://en.wikipedia.org/wiki/Earth%27s_outer_core', magnetosphere: 'https://en.wikipedia.org/wiki/Magnetosphere', solarWind: 'https://en.wikipedia.org/wiki/Solar_wind', cosmicRay: 'https://en.wikipedia.org/wiki/Cosmic_ray', atmosphereWater: "https://en.wikipedia.org/wiki/Water_vapor#In_Earth's_atmosphere", harborLife: 'https://en.wikipedia.org/wiki/Planetary_habitability',
    dynamicAtmosphere: 'https://en.wikipedia.org/wiki/Atmosphere_of_Earth', meteoroids: 'https://en.wikipedia.org/wiki/Meteoroid', uvLight: 'https://en.wikipedia.org/wiki/Ozone_layer', nitrogen: 'https://en.wikipedia.org/wiki/Nitrogen', oxygen: 'https://en.wikipedia.org/wiki/Oxygen', waterVapor: 'https://en.wikipedia.org/wiki/Water_vapor', cloudFormation: 'https://en.wikipedia.org/wiki/Cloud#Formation', greenhouseGas: 'https://en.wikipedia.org/wiki/Greenhouse_gas', carbonDioxide: 'https://en.wikipedia.org/wiki/Carbon_dioxide', sunlightEnergy: 'https://en.wikipedia.org/wiki/Solar_irradiance', equatorialRegion: 'https://en.wikipedia.org/wiki/Tropics', atmospheric: 'https://en.wikipedia.org/wiki/Atmospheric_circulation', oceanCurrents: 'https://en.wikipedia.org/wiki/Ocean_current', climateSystem: 'https://en.wikipedia.org/wiki/Climate_system', climateRegion: 'https://en.wikipedia.org/wiki/Climate_classification', precipitation: 'https://en.wikipedia.org/wiki/Precipitation', carbonCycle: 'https://en.wikipedia.org/wiki/Carbon_cycle', nitrogenCycle: 'https://en.wikipedia.org/wiki/Nitrogen_cycle', biogeochemicalCycle: 'https://en.wikipedia.org/wiki/Biogeochemical_cycle',
}

export default function EarthScene() {
    const [showInfo, setShowInfo] = useState(false)

    return (
        <>
            <Canvas>
                <ambientLight/>
                <Suspense fallback={null}>
                <Earth onEarthClick={() => setShowInfo((prev) => !prev)} />
                </Suspense>
                <group position={[40, 0, -50]}>
                    <Sun scale={2} />
                    <pointLight intensity={2.5} distance={60} color="#fff3cc" />
                </group>
                <EffectComposer>
                    <Bloom intensity={2.8} luminanceThreshold={0.05} luminanceSmoothing={0.9} />
                </EffectComposer>
                <Environment preset='sunset' />
                <OrbitControls />
            </Canvas>
            <div className='overlay-hint-text'>
                <h1>Click on the planet</h1>
            </div>
            {showInfo ? (
                <div className='container orbitron-futures'>
                    <button className='close' onClick={() => setShowInfo(false)}/>
                    <h1><a href={links.earth}>Earth</a></h1>
                    <p>Earth is the third <a href={links.planet}>planet</a> from the <a href={links.sun}>Sun</a> and the only <a href={links.astronomicalObject}>astronomical object</a> known to <a href={links.harborLife}>harbor life</a>. This is enabled by Earth being an <a href={links.oceanWorld}>ocean world</a>, the only one in the <a href={links.solarSystem}>Solar System</a> sustaining liquid <a href={links.surfaceWater}>surface water</a>. Almost all of Earth's water is contained in its global ocean, covering <a href={links.waterDistribution}>70.8%</a> of Earth's crust. The remaining 29.2% of <a href={links.crust}>Earth's crust</a> is land, most of which is located in the form of <a href={links.continent}>continental</a> <a href={links.landmass}>landmasses</a> within Earth's <a href={links.landHemisphere}>land hemisphere</a>. Most of Earth's land is at least somewhat <a href={links.humidity}>humid</a> and covered by vegetation, while large <a href={links.iceSheet}>ice sheets</a> at Earth's <a href={links.polarDesert}>polar deserts</a> retain more water than Earth's <a href={links.groundwater}>groundwater</a>, lakes, rivers, and <a href={links.atmosphereWater}>atmospheric water</a> combined. Earth's crust consists of slowly moving <a href={links.plateTectonics}>tectonic plates</a>, which interact to produce mountain ranges, <a href={links.volcano}>volcanoes</a>, and earthquakes. <a href={links.outerCore}>Earth has a liquid outer core</a> that generates a <a href={links.magnetosphere}>magnetosphere</a> capable of deflecting most of the destructive <a href={links.solarWind}>solar winds</a> and <a href={links.cosmicRay}>cosmic radiation</a>.</p>
                    <p>Earth has a <a href={links.dynamicAtmosphere}>dynamic atmosphere</a>, which sustains Earth's surface conditions and protects it from most <a href={links.meteoroids}>meteoroids</a> and <a href={links.uvLight}>UV-light at entry</a>. It is composed primarily of <a href={links.nitrogen}>nitrogen</a> and <a href={links.oxygen}>oxygen</a>. <a href={links.waterVapor}>Water vapor</a> is widely present in the atmosphere, <a href={links.cloudFormation}>forming clouds</a> that cover most of the planet. The water vapor acts as a <a href={links.greenhouseGas}>greenhouse gas</a> and, together with other greenhouse gases in the atmosphere, particularly <a href={links.carbonDioxide}>carbon dioxide</a> (CO2), creates the conditions for both liquid surface water and water vapor to persist via the capturing of <a href={links.sunlightEnergy}>energy from the Sun's light</a>. This process maintains the current average surface temperature of 14.76 °C (58.57 °F), at which water is liquid under normal atmospheric pressure. Differences in the amount of captured energy between geographic regions (as with the <a href={links.equatorialRegion}>equatorial region</a> receiving more sunlight than the polar regions) drive <a href={links.atmospheric}>atmospheric</a> and <a href={links.oceanCurrents}>ocean currents</a>, producing a global <a href={links.climateSystem}>climate system</a> with different <a href={links.climateRegion}>climate regions</a>, and a range of weather phenomena such as <a href={links.precipitation}>precipitation</a>, allowing components such as <a href={links.carbonCycle}>carbon</a> and <a href={links.nitrogenCycle}>nitrogen</a> to <a href={links.biogeochemicalCycle}>cycle</a>.</p>
                </div>
            ) : null}
        </>
    )
}