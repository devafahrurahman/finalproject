import React from 'react';


class CurrentcyInput extends React.Component {
    _handleChange = (e) => {
        this.props.onChangeCurency(e.target.value);
    }
    render() {
        const { jmlLabel, total } = this.props;

        return (
            <>
                <label>
                    {jmlLabel === 'jml' ? 'Jumlah:' : 'Harga:'}
                    <input type="number" value={total} onChange={this._handleChange} />
                </label>
                <br />
            </>
        );
    }
}


class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            nomor: '',
            makanan: [],
            minuman: [],
            cemilan: [],
            keterangan: '',
            jumlah: 0,
            harga: 0
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onCheck = this.onCheck.bind(this);
        this.onPickMakanan = this.onPickMakanan.bind(this);
        this.onPickMinuman = this.onPickMinuman.bind(this);
        this.onPickCemilan = this.onPickCemilan.bind(this);
    }

    onSubmit(even) {
        alert(`Pesanan telah ditambahkan`);
        even.preventDefault();
    }

    onChange(even) {
        const { name, value } = even.target;
        this.setState({ [name]: value })
    }

    onCheck(even) {
        const { name } = even.target;
        this.setState(prevState => ({ [name]: !prevState[name] }))
    }

    onPickMakanan(even) {
        let makanan = [...this.state.makanan]
        let idx = makanan.findIndex(elemen => even.target.value === elemen);
        if (idx > 0) {
            makanan = [...makanan.slice(0, idx), ...makanan.slice(idx + 1, makanan.length)]
        } else if (idx === 0) {
            makanan = [...makanan.slice(idx + 1, makanan.length)]
        } else {
            makanan.push(even.target.value)
        }

        console.log(makanan);

        this.setState({ makanan });
    }

    onPickMinuman(even) {
        let minuman = [...this.state.minuman]
        let idx = minuman.findIndex(elemen => even.target.value === elemen);
        if (idx > 0) {
            minuman = [...minuman.slice(0, idx), ...minuman.slice(idx + 1, minuman.length)]
        } else if (idx === 0) {
            minuman = [...minuman.slice(idx + 1, minuman.length)]
        } else {
            minuman.push(even.target.value)
        }

        console.log(minuman);

        this.setState({ minuman });
    }

    onPickCemilan(even) {
        let cemilan = [...this.state.cemilan]
        let idx = cemilan.findIndex(elemen => even.target.value === elemen);
        if (idx > 0) {
            cemilan = [...cemilan.slice(0, idx), ...cemilan.slice(idx + 1, cemilan.length)]
        } else if (idx === 0) {
            cemilan = [...cemilan.slice(idx + 1, cemilan.length)]
        } else {
            cemilan.push(even.target.value)
        }

        console.log(cemilan);

        this.setState({ cemilan });
    }

    onChangeJumlah = (jumlah) => {
        let harga = (parseFloat(jumlah) * 10000).toString();
        this.setState({ jumlah, harga })
    }

    onChangeHarga = (harga) => {
        let jumlah = (parseFloat(harga) / 10000).toString();
        this.setState({ jumlah, harga })
    }

    render() {
        const { name, nomor, makanan, minuman, cemilan, keterangan, jumlah, harga } = this.state;

        return (
            <div className="">
                <div className="App-header">
                    <form onSubmit={this.onSubmit}>
                        <fieldset>
                            <p>
                                <label>
                                    Name:
                                <input name="name" type="text" value={name} onChange={this.onChange} />
                                </label>
                            </p>
                            <p>
                                <label>
                                    Nomor Meja
                                <input name="nomor" type="number" value={nomor} onChange={this.onChange} />
                                </label>
                            </p>
                            <p>
                                <label>
                                    Makanan
                                    <select multiple value={makanan} onChange={this.onPickMakanan}>
                                        <option value="Nasi Goreng">Nasi Goreng</option>
                                        <option value="Burger">Nasi Kuningk</option>
                                        <option value="Nasi Uduk">Nasi Uduk</option>
                                    </select>
                                </label>
                            </p>
                            <p>
                                <label>
                                    Minuman:
                                    <select multiple value={minuman} onChange={this.onPickMinuman}>
                                        <option value="Milkshake Coklat">Milshake Coklat</option>
                                        <option value="Just Jeruk">Jus Jeruk</option>
                                        <option value="Serabi">Jus Alpukat</option>
                                    </select>
                                </label>
                            </p>
                            <p>
                                <label>
                                    Cemilan:
                                    <select multiple value={cemilan} onChange={this.onPickCemilan}>
                                        <option value="Kentang Goreng">Kentang Goreng</option>
                                        <option value="Roti Bakar">Roti Bakar</option>
                                        <option value="Pisang Goreng">Pisang Goreng</option>
                                    </select>
                                </label>
                            </p>
                            <p>
                                <label value={keterangan} onChange={this.onPick}>
                                    Keterangan:
                                <textarea>

                                    </textarea>
                                </label>
                            </p>
                            <p>
                                <CurrentcyInput jmlLabel="jml" total={jumlah} onChangeCurency={this.onChangeJumlah} />
                            </p>
                            <p>
                                <CurrentcyInput jmlLabel="tot" total={harga} onChangeCurency={this.onChangeHarga} />
                            </p>
                            <button type="submit">Tambah</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        );
    }
}

export default Order;