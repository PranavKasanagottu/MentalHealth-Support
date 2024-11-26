import React from 'react';
import data from './sample.json';

function AboutUs() {
    return (
        <div>
            <h2>Location Data</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((location) => (
                        <tr key={location.id}>
                            <td>{location.id}</td>
                            <td>{location.name}</td>
                            <td>{location.lati}</td>
                            <td>{location.lon}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AboutUs;
