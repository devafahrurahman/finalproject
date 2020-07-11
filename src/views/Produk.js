import React, { Component } from 'react';

class Makanan extends Component {
    render() {
        return (
            <div>
                <ol>
                    <li>Nasi Goreng</li>
                    <li>Nasi Kuning</li>
                    <li>Nasi Uduk</li>
                </ol>
            </div>
        );
    }
}

class Minuman extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>Milshake Coklat</li>
                    <li>Jus Jeruk</li>
                    <li>Jus Alpukan</li>
                </ul>
            </div>
        );
    }
}

class Cemilan extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>Kentag Goreng</li>
                    <li>Roti Bakar</li>
                    <li>Pisang Goreng</li>
                </ul>
            </div>
        );
    }
}

export default function Produk() {

    return (
        <div className="App">
            <header className="App-header">
                <h1>Makanan</h1>
                <Makanan />

                <h1>Minuman</h1>
                <Minuman />

                <h1>Cemilan</h1>
                <Cemilan />

            </header>
        </div>
    )
}