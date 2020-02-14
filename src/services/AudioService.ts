class AudioService {

    private static END_POINT: string = "https://pokeapi.co/api/v2/pokemon/";

    public static playAudio(audioUrl: string) {
        let crie = new Audio(audioUrl);

        let audioPromise = crie.play();
        if (audioPromise !== undefined) {
            audioPromise.then(_ => {

                console.log("play: " + audioUrl);
            }).catch(error => {
                console.log("playback prevented");
            });
        }


    }

}

export default AudioService;

