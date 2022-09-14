music.onEvent(MusicEvent.MelodyStarted, function () {
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.House)
        basic.showIcon(IconNames.StickFigure)
    }
    basic.clearScreen()
    music.rest(music.beat(BeatFraction.Double))
    music.stopMelody(MelodyStopOptions.All)
})
music.onEvent(MusicEvent.MelodyEnded, function () {
    music.playMelody("G B A G C5 B A B ", 120)
})
music.setVolume(51)
music.playSoundEffect(music.createSoundEffect(
WaveShape.Sawtooth,
553,
4432,
255,
0,
2000,
SoundExpressionEffect.Vibrato,
InterpolationCurve.Linear
), SoundExpressionPlayMode.UntilDone)
control.inBackground(function () {
    music.playMelody("C D E F G A B C5 ", 155)
})
