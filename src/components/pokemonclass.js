class PokemonClass {
    constructor(id,name, image, height, weight, types, stats, abilities) {
        this.id = id || 0;
        this.name = name || 'DefaultMon';
        this.image = image || 'default_image.png';
        this.height = height || 10;
        this.weight = weight || 300;
        this.types = types || ['normal', 'flying'];
        this.stats = stats || [
            { name: 'speed', value: 60 },
            { name: 'attack', value: 70 }
        ];
        this.abilities = abilities || ['run-away', 'guts'];
    }

    get spriteUrl() {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`;
    }
    static getData(data) {
        return new PokemonClass(
            data.id,
            data.name,
            data.sprites?.front_default,
            data.height,
            data.weight,
            data.types.map(type => type.type.name),
            data.stats.map(stat => ({ name: stat.stat.name, value: stat.base_stat })),
            data.abilities.map(ability => ability.ability.name),
        );
    }
}

export default PokemonClass;