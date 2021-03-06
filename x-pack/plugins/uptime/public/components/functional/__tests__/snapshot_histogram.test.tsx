/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import React from 'react';
import { shallowWithIntl } from 'test_utils/enzyme_helpers';
import { SnapshotHistogram } from '../snapshot_histogram';

describe('SnapshotHistogram component', () => {
  const props = {
    primaryColor: '#FEFEFE',
    dangerColor: '#FF00FF',
    windowWidth: 1200,
    histogram: [
      {
        monitorId: 'auto-tcp-0X81440A68E839814C',
        data: [
          { upCount: 1, downCount: 293, x: 1548697920000, x0: 1548697620000, y: 1 },
          { upCount: null, downCount: 300, x: 1548698220000, x0: 1548697920000, y: 1 },
          { upCount: 145, downCount: 155, x: 1548698520000, x0: 1548698220000, y: 1 },
          { upCount: 300, downCount: null, x: 1548698820000, x0: 1548698520000, y: 1 },
          { upCount: 300, downCount: null, x: 1548699120000, x0: 1548698820000, y: 1 },
          { upCount: 300, downCount: null, x: 1548699420000, x0: 1548699120000, y: 1 },
          { upCount: 300, downCount: null, x: 1548699720000, x0: 1548699420000, y: 1 },
          { upCount: 300, downCount: null, x: 1548700020000, x0: 1548699720000, y: 1 },
          { upCount: 300, downCount: null, x: 1548700320000, x0: 1548700020000, y: 1 },
          { upCount: 300, downCount: null, x: 1548700620000, x0: 1548700320000, y: 1 },
          { upCount: 300, downCount: null, x: 1548700920000, x0: 1548700620000, y: 1 },
          { upCount: 77, downCount: null, x: 1548701220000, x0: 1548700920000, y: 1 },
        ],
      },
      {
        monitorId: 'auto-http-0XD9AE729FC1C1E04A',
        data: [
          { upCount: 79, downCount: null, x: 1548697920000, x0: 1548697620000, y: 1 },
          { upCount: 80, downCount: null, x: 1548698220000, x0: 1548697920000, y: 1 },
          { upCount: 86, downCount: null, x: 1548698520000, x0: 1548698220000, y: 1 },
          { upCount: 87, downCount: 1, x: 1548698820000, x0: 1548698520000, y: 1 },
          { upCount: 81, downCount: null, x: 1548699120000, x0: 1548698820000, y: 1 },
          { upCount: 100, downCount: null, x: 1548699420000, x0: 1548699120000, y: 1 },
          { upCount: 100, downCount: null, x: 1548699720000, x0: 1548699420000, y: 1 },
          { upCount: 99, downCount: null, x: 1548700020000, x0: 1548699720000, y: 1 },
          { upCount: 96, downCount: null, x: 1548700320000, x0: 1548700020000, y: 1 },
          { upCount: 81, downCount: null, x: 1548700620000, x0: 1548700320000, y: 1 },
          { upCount: 80, downCount: null, x: 1548700920000, x0: 1548700620000, y: 1 },
          { upCount: 20, downCount: null, x: 1548701220000, x0: 1548700920000, y: 1 },
        ],
      },
      {
        monitorId: 'auto-http-0XDD2D4E60FD4A61C3',
        data: [
          { upCount: 79, downCount: null, x: 1548697920000, x0: 1548697620000, y: 1 },
          { upCount: 80, downCount: null, x: 1548698220000, x0: 1548697920000, y: 1 },
          { upCount: 86, downCount: null, x: 1548698520000, x0: 1548698220000, y: 1 },
          { upCount: 88, downCount: null, x: 1548698820000, x0: 1548698520000, y: 1 },
          { upCount: 81, downCount: null, x: 1548699120000, x0: 1548698820000, y: 1 },
          { upCount: 95, downCount: null, x: 1548699420000, x0: 1548699120000, y: 1 },
          { upCount: 94, downCount: null, x: 1548699720000, x0: 1548699420000, y: 1 },
          { upCount: 98, downCount: null, x: 1548700020000, x0: 1548699720000, y: 1 },
          { upCount: 93, downCount: null, x: 1548700320000, x0: 1548700020000, y: 1 },
          { upCount: 81, downCount: null, x: 1548700620000, x0: 1548700320000, y: 1 },
          { upCount: 80, downCount: null, x: 1548700920000, x0: 1548700620000, y: 1 },
          { upCount: 20, downCount: null, x: 1548701220000, x0: 1548700920000, y: 1 },
        ],
      },
      {
        monitorId: 'auto-http-0X131221E73F825974',
        data: [
          { upCount: 74, downCount: null, x: 1548697920000, x0: 1548697620000, y: 1 },
          { upCount: 75, downCount: null, x: 1548698220000, x0: 1548697920000, y: 1 },
          { upCount: 75, downCount: null, x: 1548698520000, x0: 1548698220000, y: 1 },
          { upCount: 73, downCount: null, x: 1548698820000, x0: 1548698520000, y: 1 },
          { upCount: 75, downCount: null, x: 1548699120000, x0: 1548698820000, y: 1 },
          { upCount: 74, downCount: null, x: 1548699420000, x0: 1548699120000, y: 1 },
          { upCount: 75, downCount: null, x: 1548699720000, x0: 1548699420000, y: 1 },
          { upCount: 75, downCount: null, x: 1548700020000, x0: 1548699720000, y: 1 },
          { upCount: 75, downCount: null, x: 1548700320000, x0: 1548700020000, y: 1 },
          { upCount: 75, downCount: null, x: 1548700620000, x0: 1548700320000, y: 1 },
          { upCount: 75, downCount: null, x: 1548700920000, x0: 1548700620000, y: 1 },
          { upCount: 19, downCount: null, x: 1548701220000, x0: 1548700920000, y: 1 },
        ],
      },
      {
        monitorId: 'auto-http-0X3675F89EF0612091',
        data: [
          { upCount: null, downCount: 74, x: 1548697920000, x0: 1548697620000, y: 1 },
          { upCount: null, downCount: 75, x: 1548698220000, x0: 1548697920000, y: 1 },
          { upCount: null, downCount: 75, x: 1548698520000, x0: 1548698220000, y: 1 },
          { upCount: null, downCount: 75, x: 1548698820000, x0: 1548698520000, y: 1 },
          { upCount: null, downCount: 75, x: 1548699120000, x0: 1548698820000, y: 1 },
          { upCount: null, downCount: 75, x: 1548699420000, x0: 1548699120000, y: 1 },
          { upCount: null, downCount: 75, x: 1548699720000, x0: 1548699420000, y: 1 },
          { upCount: null, downCount: 75, x: 1548700020000, x0: 1548699720000, y: 1 },
          { upCount: null, downCount: 75, x: 1548700320000, x0: 1548700020000, y: 1 },
          { upCount: null, downCount: 75, x: 1548700620000, x0: 1548700320000, y: 1 },
          { upCount: null, downCount: 75, x: 1548700920000, x0: 1548700620000, y: 1 },
          { upCount: null, downCount: 19, x: 1548701220000, x0: 1548700920000, y: 1 },
        ],
      },
      {
        monitorId: 'auto-http-0X9CB71300ABD5A2A8',
        data: [
          { upCount: 69, downCount: null, x: 1548697920000, x0: 1548697620000, y: 1 },
          { upCount: 70, downCount: null, x: 1548698220000, x0: 1548697920000, y: 1 },
          { upCount: 68, downCount: null, x: 1548698520000, x0: 1548698220000, y: 1 },
          { upCount: 69, downCount: null, x: 1548698820000, x0: 1548698520000, y: 1 },
          { upCount: 69, downCount: null, x: 1548699120000, x0: 1548698820000, y: 1 },
          { upCount: 69, downCount: null, x: 1548699420000, x0: 1548699120000, y: 1 },
          { upCount: 70, downCount: null, x: 1548699720000, x0: 1548699420000, y: 1 },
          { upCount: 70, downCount: null, x: 1548700020000, x0: 1548699720000, y: 1 },
          { upCount: 70, downCount: null, x: 1548700320000, x0: 1548700020000, y: 1 },
          { upCount: 69, downCount: null, x: 1548700620000, x0: 1548700320000, y: 1 },
          { upCount: 70, downCount: null, x: 1548700920000, x0: 1548700620000, y: 1 },
          { upCount: 18, downCount: null, x: 1548701220000, x0: 1548700920000, y: 1 },
        ],
      },
      {
        monitorId: 'auto-http-0X970CBD2F2102BFA8',
        data: [
          { upCount: 58, downCount: null, x: 1548697920000, x0: 1548697620000, y: 1 },
          { upCount: 60, downCount: null, x: 1548698220000, x0: 1548697920000, y: 1 },
          { upCount: 60, downCount: null, x: 1548698520000, x0: 1548698220000, y: 1 },
          { upCount: 60, downCount: null, x: 1548698820000, x0: 1548698520000, y: 1 },
          { upCount: 60, downCount: null, x: 1548699120000, x0: 1548698820000, y: 1 },
          { upCount: 60, downCount: null, x: 1548699420000, x0: 1548699120000, y: 1 },
          { upCount: 60, downCount: null, x: 1548699720000, x0: 1548699420000, y: 1 },
          { upCount: 60, downCount: null, x: 1548700020000, x0: 1548699720000, y: 1 },
          { upCount: 60, downCount: null, x: 1548700320000, x0: 1548700020000, y: 1 },
          { upCount: 60, downCount: null, x: 1548700620000, x0: 1548700320000, y: 1 },
          { upCount: 60, downCount: null, x: 1548700920000, x0: 1548700620000, y: 1 },
          { upCount: 16, downCount: null, x: 1548701220000, x0: 1548700920000, y: 1 },
        ],
      },
      {
        monitorId: 'auto-http-0XA8096548ECEB85B7',
        data: [
          { upCount: null, downCount: 57, x: 1548697920000, x0: 1548697620000, y: 1 },
          { upCount: null, downCount: 60, x: 1548698220000, x0: 1548697920000, y: 1 },
          { upCount: null, downCount: 61, x: 1548698520000, x0: 1548698220000, y: 1 },
          { upCount: null, downCount: 56, x: 1548698820000, x0: 1548698520000, y: 1 },
          { upCount: null, downCount: 45, x: 1548699120000, x0: 1548698820000, y: 1 },
          { upCount: null, downCount: 49, x: 1548699420000, x0: 1548699120000, y: 1 },
          { upCount: null, downCount: 60, x: 1548699720000, x0: 1548699420000, y: 1 },
          { upCount: null, downCount: 60, x: 1548700020000, x0: 1548699720000, y: 1 },
          { upCount: null, downCount: 64, x: 1548700320000, x0: 1548700020000, y: 1 },
          { upCount: null, downCount: 59, x: 1548700620000, x0: 1548700320000, y: 1 },
          { upCount: null, downCount: 60, x: 1548700920000, x0: 1548700620000, y: 1 },
          { upCount: null, downCount: 14, x: 1548701220000, x0: 1548700920000, y: 1 },
        ],
      },
      {
        monitorId: 'auto-http-0XC9CDA429418EDC2B',
        data: [
          { upCount: 5, downCount: null, x: 1548697920000, x0: 1548697620000, y: 1 },
          { upCount: 5, downCount: null, x: 1548698220000, x0: 1548697920000, y: 1 },
          { upCount: 5, downCount: null, x: 1548698520000, x0: 1548698220000, y: 1 },
          { upCount: 5, downCount: null, x: 1548698820000, x0: 1548698520000, y: 1 },
          { upCount: 5, downCount: null, x: 1548699120000, x0: 1548698820000, y: 1 },
          { upCount: 5, downCount: null, x: 1548699420000, x0: 1548699120000, y: 1 },
          { upCount: 5, downCount: null, x: 1548699720000, x0: 1548699420000, y: 1 },
          { upCount: 5, downCount: null, x: 1548700020000, x0: 1548699720000, y: 1 },
          { upCount: 5, downCount: null, x: 1548700320000, x0: 1548700020000, y: 1 },
          { upCount: 5, downCount: null, x: 1548700620000, x0: 1548700320000, y: 1 },
          { upCount: 5, downCount: null, x: 1548700920000, x0: 1548700620000, y: 1 },
          { upCount: 1, downCount: null, x: 1548701220000, x0: 1548700920000, y: 1 },
        ],
      },
      {
        monitorId: 'auto-http-0XE3B163481423197D',
        data: [
          { upCount: 5, downCount: null, x: 1548697920000, x0: 1548697620000, y: 1 },
          { upCount: 5, downCount: null, x: 1548698220000, x0: 1548697920000, y: 1 },
          { upCount: 5, downCount: null, x: 1548698520000, x0: 1548698220000, y: 1 },
          { upCount: 5, downCount: null, x: 1548698820000, x0: 1548698520000, y: 1 },
          { upCount: 5, downCount: null, x: 1548699120000, x0: 1548698820000, y: 1 },
          { upCount: 5, downCount: null, x: 1548699420000, x0: 1548699120000, y: 1 },
          { upCount: 5, downCount: null, x: 1548699720000, x0: 1548699420000, y: 1 },
          { upCount: 5, downCount: null, x: 1548700020000, x0: 1548699720000, y: 1 },
          { upCount: 5, downCount: null, x: 1548700320000, x0: 1548700020000, y: 1 },
          { upCount: 5, downCount: null, x: 1548700620000, x0: 1548700320000, y: 1 },
          { upCount: 5, downCount: null, x: 1548700920000, x0: 1548700620000, y: 1 },
          { upCount: 1, downCount: null, x: 1548701220000, x0: 1548700920000, y: 1 },
        ],
      },
    ],
  };

  it('renders the component without errors', () => {
    const component = shallowWithIntl(<SnapshotHistogram {...props} />);
    expect(component).toMatchSnapshot();
  });
});
