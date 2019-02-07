//@flow

export type OrderedDict<k, v> = {
  elements: Array<v>,
  order: {
    [k]: number
  }
}

export type LabelState = {
  name: string,
  value: number
}

export type ConditionState = {
  name: string,
  marked: boolean
}

export type PotentialState = {
  total: number,
  used: number,
  groupSize: number
}

export type CharacterState = {
  player: string,
  name: string,
  heroName: string,
  playbook: string,
  powers: string,
  labels: OrderedDict<string, LabelState>,
  conditions: OrderedDict<string, ConditionState>,
  potential: PotentialState,
  harm: number
}
