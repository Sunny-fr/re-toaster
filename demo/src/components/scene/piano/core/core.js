import Tone from 'tone'

const INSTRUMENT = 'AMSynth'
export function playNote({note = 'C4', duration = '8n', callback}) {
    //const synth= new Tone.Synth().toMaster()
    const instrument = new Tone[INSTRUMENT]().toMaster()
    instrument.triggerAttackRelease(note, duration)
    if (callback) callback()
}

export function keyBoardKey({note}) {
    const instrument = new Tone[INSTRUMENT]().toMaster()
    return {
        instrument,
        release: () => instrument.triggerRelease(),
        press: () => instrument.triggerAttack(note)
    }
}