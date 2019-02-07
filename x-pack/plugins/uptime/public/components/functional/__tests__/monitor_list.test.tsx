/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import React from 'react';
import { shallowWithIntl } from 'test_utils/enzyme_helpers';
import { LatestMonitorsResult } from '../../../../common/graphql/types';
import { MonitorList } from '../monitor_list';

describe('MonitorList component', () => {
  let monitorResult: LatestMonitorsResult;

  beforeEach(() => {
    monitorResult = {
      monitors: [
        {
          id: { key: 'auto-http-0X131221E73F825974', url: 'https://www.google.com/' },
          ping: {
            timestamp: '2019-01-28T18:43:15.077Z',
            monitor: {
              duration: { us: 132169 },
              id: 'auto-http-0X131221E73F825974',
              ip: '172.217.12.132',
              name: '',
              status: 'up',
            },
            url: { full: 'https://www.google.com/' },
          },
          upSeries: [
            { x: 1548697620000, y: 74 },
            { x: 1548697920000, y: 75 },
            { x: 1548698220000, y: 75 },
            { x: 1548698520000, y: 73 },
            { x: 1548698820000, y: 75 },
            { x: 1548699120000, y: 74 },
            { x: 1548699420000, y: 75 },
            { x: 1548699720000, y: 75 },
            { x: 1548700020000, y: 75 },
            { x: 1548700320000, y: 75 },
            { x: 1548700620000, y: 75 },
            { x: 1548700920000, y: 19 },
          ],
          downSeries: [
            { x: 1548697620000, y: null },
            { x: 1548697920000, y: null },
            { x: 1548698220000, y: null },
            { x: 1548698520000, y: null },
            { x: 1548698820000, y: null },
            { x: 1548699120000, y: null },
            { x: 1548699420000, y: null },
            { x: 1548699720000, y: null },
            { x: 1548700020000, y: null },
            { x: 1548700320000, y: null },
            { x: 1548700620000, y: null },
            { x: 1548700920000, y: null },
          ],
        },
        {
          id: { key: 'auto-http-0X3675F89EF0612091', url: 'http://localhost:12349/' },
          ping: {
            timestamp: '2019-01-28T18:43:15.077Z',
            monitor: {
              duration: { us: 3331 },
              id: 'auto-http-0X3675F89EF0612091',
              ip: '127.0.0.1',
              name: '',
              status: 'down',
            },
            url: { full: 'http://localhost:12349/' },
          },
          upSeries: [
            { x: 1548697620000, y: null },
            { x: 1548697920000, y: null },
            { x: 1548698220000, y: null },
            { x: 1548698520000, y: null },
            { x: 1548698820000, y: null },
            { x: 1548699120000, y: null },
            { x: 1548699420000, y: null },
            { x: 1548699720000, y: null },
            { x: 1548700020000, y: null },
            { x: 1548700320000, y: null },
            { x: 1548700620000, y: null },
            { x: 1548700920000, y: null },
          ],
          downSeries: [
            { x: 1548697620000, y: 74 },
            { x: 1548697920000, y: 75 },
            { x: 1548698220000, y: 75 },
            { x: 1548698520000, y: 75 },
            { x: 1548698820000, y: 75 },
            { x: 1548699120000, y: 75 },
            { x: 1548699420000, y: 75 },
            { x: 1548699720000, y: 75 },
            { x: 1548700020000, y: 75 },
            { x: 1548700320000, y: 75 },
            { x: 1548700620000, y: 75 },
            { x: 1548700920000, y: 19 },
          ],
        },
        {
          id: { key: 'auto-http-0X970CBD2F2102BFA8', url: 'http://www.google.com/' },
          ping: {
            timestamp: '2019-01-28T18:43:15.077Z',
            monitor: {
              duration: { us: 118727 },
              id: 'auto-http-0X970CBD2F2102BFA8',
              ip: '172.217.12.132',
              name: '',
              status: 'up',
            },
            url: { full: 'http://www.google.com/' },
          },
          upSeries: [
            { x: 1548697620000, y: 58 },
            { x: 1548697920000, y: 60 },
            { x: 1548698220000, y: 60 },
            { x: 1548698520000, y: 60 },
            { x: 1548698820000, y: 60 },
            { x: 1548699120000, y: 60 },
            { x: 1548699420000, y: 60 },
            { x: 1548699720000, y: 60 },
            { x: 1548700020000, y: 60 },
            { x: 1548700320000, y: 60 },
            { x: 1548700620000, y: 60 },
            { x: 1548700920000, y: 16 },
          ],
          downSeries: [
            { x: 1548697620000, y: null },
            { x: 1548697920000, y: null },
            { x: 1548698220000, y: null },
            { x: 1548698520000, y: null },
            { x: 1548698820000, y: null },
            { x: 1548699120000, y: null },
            { x: 1548699420000, y: null },
            { x: 1548699720000, y: null },
            { x: 1548700020000, y: null },
            { x: 1548700320000, y: null },
            { x: 1548700620000, y: null },
            { x: 1548700920000, y: null },
          ],
        },
        {
          id: { key: 'auto-http-0X9CB71300ABD5A2A8', url: 'https://www.github.com/' },
          ping: {
            timestamp: '2019-01-28T18:43:15.077Z',
            monitor: {
              duration: { us: 247244 },
              id: 'auto-http-0X9CB71300ABD5A2A8',
              ip: '192.30.253.112',
              name: '',
              status: 'up',
            },
            url: { full: 'https://www.github.com/' },
          },
          upSeries: [
            { x: 1548697620000, y: 69 },
            { x: 1548697920000, y: 70 },
            { x: 1548698220000, y: 68 },
            { x: 1548698520000, y: 69 },
            { x: 1548698820000, y: 69 },
            { x: 1548699120000, y: 69 },
            { x: 1548699420000, y: 70 },
            { x: 1548699720000, y: 70 },
            { x: 1548700020000, y: 70 },
            { x: 1548700320000, y: 69 },
            { x: 1548700620000, y: 70 },
            { x: 1548700920000, y: 18 },
          ],
          downSeries: [
            { x: 1548697620000, y: null },
            { x: 1548697920000, y: null },
            { x: 1548698220000, y: null },
            { x: 1548698520000, y: null },
            { x: 1548698820000, y: null },
            { x: 1548699120000, y: null },
            { x: 1548699420000, y: null },
            { x: 1548699720000, y: null },
            { x: 1548700020000, y: null },
            { x: 1548700320000, y: null },
            { x: 1548700620000, y: null },
            { x: 1548700920000, y: null },
          ],
        },
        {
          id: { key: 'auto-http-0XA8096548ECEB85B7', url: 'http://www.example.com/' },
          ping: {
            timestamp: '2019-01-28T18:43:07.078Z',
            monitor: {
              duration: { us: 4751074 },
              id: 'auto-http-0XA8096548ECEB85B7',
              ip: '198.71.248.67',
              name: '',
              status: 'down',
            },
            url: { full: 'http://www.example.com/' },
          },
          upSeries: [
            { x: 1548697620000, y: null },
            { x: 1548697920000, y: null },
            { x: 1548698220000, y: null },
            { x: 1548698520000, y: null },
            { x: 1548698820000, y: null },
            { x: 1548699120000, y: null },
            { x: 1548699420000, y: null },
            { x: 1548699720000, y: null },
            { x: 1548700020000, y: null },
            { x: 1548700320000, y: null },
            { x: 1548700620000, y: null },
            { x: 1548700920000, y: null },
          ],
          downSeries: [
            { x: 1548697620000, y: 57 },
            { x: 1548697920000, y: 60 },
            { x: 1548698220000, y: 61 },
            { x: 1548698520000, y: 56 },
            { x: 1548698820000, y: 45 },
            { x: 1548699120000, y: 49 },
            { x: 1548699420000, y: 60 },
            { x: 1548699720000, y: 60 },
            { x: 1548700020000, y: 64 },
            { x: 1548700320000, y: 59 },
            { x: 1548700620000, y: 60 },
            { x: 1548700920000, y: 14 },
          ],
        },
        {
          id: { key: 'auto-http-0XC9CDA429418EDC2B', url: 'https://www.wikipedia.org/' },
          ping: {
            timestamp: '2019-01-28T18:42:55.074Z',
            monitor: {
              duration: { us: 1164812 },
              id: 'auto-http-0XC9CDA429418EDC2B',
              ip: '208.80.154.224',
              name: '',
              status: 'up',
            },
            url: { full: 'https://www.wikipedia.org/' },
          },
          upSeries: [
            { x: 1548697620000, y: 5 },
            { x: 1548697920000, y: 5 },
            { x: 1548698220000, y: 5 },
            { x: 1548698520000, y: 5 },
            { x: 1548698820000, y: 5 },
            { x: 1548699120000, y: 5 },
            { x: 1548699420000, y: 5 },
            { x: 1548699720000, y: 5 },
            { x: 1548700020000, y: 5 },
            { x: 1548700320000, y: 5 },
            { x: 1548700620000, y: 5 },
            { x: 1548700920000, y: 1 },
          ],
          downSeries: [
            { x: 1548697620000, y: null },
            { x: 1548697920000, y: null },
            { x: 1548698220000, y: null },
            { x: 1548698520000, y: null },
            { x: 1548698820000, y: null },
            { x: 1548699120000, y: null },
            { x: 1548699420000, y: null },
            { x: 1548699720000, y: null },
            { x: 1548700020000, y: null },
            { x: 1548700320000, y: null },
            { x: 1548700620000, y: null },
            { x: 1548700920000, y: null },
          ],
        },
        {
          id: { key: 'auto-http-0XD9AE729FC1C1E04A', url: 'http://www.reddit.com/' },
          ping: {
            timestamp: '2019-01-28T18:43:13.074Z',
            monitor: {
              duration: { us: 299586 },
              id: 'auto-http-0XD9AE729FC1C1E04A',
              ip: '151.101.249.140',
              name: '',
              status: 'up',
            },
            url: { full: 'http://www.reddit.com/' },
          },
          upSeries: [
            { x: 1548697620000, y: 79 },
            { x: 1548697920000, y: 80 },
            { x: 1548698220000, y: 86 },
            { x: 1548698520000, y: 87 },
            { x: 1548698820000, y: 81 },
            { x: 1548699120000, y: 100 },
            { x: 1548699420000, y: 100 },
            { x: 1548699720000, y: 99 },
            { x: 1548700020000, y: 96 },
            { x: 1548700320000, y: 81 },
            { x: 1548700620000, y: 80 },
            { x: 1548700920000, y: 20 },
          ],
          downSeries: [
            { x: 1548697620000, y: null },
            { x: 1548697920000, y: null },
            { x: 1548698220000, y: null },
            { x: 1548698520000, y: 1 },
            { x: 1548698820000, y: null },
            { x: 1548699120000, y: null },
            { x: 1548699420000, y: null },
            { x: 1548699720000, y: null },
            { x: 1548700020000, y: null },
            { x: 1548700320000, y: null },
            { x: 1548700620000, y: null },
            { x: 1548700920000, y: null },
          ],
        },
        {
          id: { key: 'auto-http-0XDD2D4E60FD4A61C3', url: 'https://www.elastic.co' },
          ping: {
            timestamp: '2019-01-28T18:43:13.074Z',
            monitor: {
              duration: { us: 850870 },
              id: 'auto-http-0XDD2D4E60FD4A61C3',
              ip: '151.101.250.217',
              name: '',
              status: 'up',
            },
            url: { full: 'https://www.elastic.co' },
          },
          upSeries: [
            { x: 1548697620000, y: 79 },
            { x: 1548697920000, y: 80 },
            { x: 1548698220000, y: 86 },
            { x: 1548698520000, y: 88 },
            { x: 1548698820000, y: 81 },
            { x: 1548699120000, y: 95 },
            { x: 1548699420000, y: 94 },
            { x: 1548699720000, y: 98 },
            { x: 1548700020000, y: 93 },
            { x: 1548700320000, y: 81 },
            { x: 1548700620000, y: 80 },
            { x: 1548700920000, y: 20 },
          ],
          downSeries: [
            { x: 1548697620000, y: null },
            { x: 1548697920000, y: null },
            { x: 1548698220000, y: null },
            { x: 1548698520000, y: null },
            { x: 1548698820000, y: null },
            { x: 1548699120000, y: null },
            { x: 1548699420000, y: null },
            { x: 1548699720000, y: null },
            { x: 1548700020000, y: null },
            { x: 1548700320000, y: null },
            { x: 1548700620000, y: null },
            { x: 1548700920000, y: null },
          ],
        },
        {
          id: { key: 'auto-http-0XE3B163481423197D', url: 'https://news.google.com/' },
          ping: {
            timestamp: '2019-01-28T18:42:55.074Z',
            monitor: {
              duration: { us: 2059606 },
              id: 'auto-http-0XE3B163481423197D',
              ip: '216.58.219.206',
              name: '',
              status: 'up',
            },
            url: { full: 'https://news.google.com/' },
          },
          upSeries: [
            { x: 1548697620000, y: 5 },
            { x: 1548697920000, y: 5 },
            { x: 1548698220000, y: 5 },
            { x: 1548698520000, y: 5 },
            { x: 1548698820000, y: 5 },
            { x: 1548699120000, y: 5 },
            { x: 1548699420000, y: 5 },
            { x: 1548699720000, y: 5 },
            { x: 1548700020000, y: 5 },
            { x: 1548700320000, y: 5 },
            { x: 1548700620000, y: 5 },
            { x: 1548700920000, y: 1 },
          ],
          downSeries: [
            { x: 1548697620000, y: null },
            { x: 1548697920000, y: null },
            { x: 1548698220000, y: null },
            { x: 1548698520000, y: null },
            { x: 1548698820000, y: null },
            { x: 1548699120000, y: null },
            { x: 1548699420000, y: null },
            { x: 1548699720000, y: null },
            { x: 1548700020000, y: null },
            { x: 1548700320000, y: null },
            { x: 1548700620000, y: null },
            { x: 1548700920000, y: null },
          ],
        },
        {
          id: { key: 'auto-tcp-0X81440A68E839814C', url: 'tcp://localhost:9200' },
          ping: {
            timestamp: '2019-01-28T18:43:16.078Z',
            monitor: {
              duration: { us: 3328 },
              id: 'auto-tcp-0X81440A68E839814C',
              ip: '127.0.0.1',
              name: '',
              status: 'up',
            },
            url: { full: 'tcp://localhost:9200' },
          },
          upSeries: [
            { x: 1548697620000, y: 1 },
            { x: 1548697920000, y: null },
            { x: 1548698220000, y: 145 },
            { x: 1548698520000, y: 300 },
            { x: 1548698820000, y: 300 },
            { x: 1548699120000, y: 300 },
            { x: 1548699420000, y: 300 },
            { x: 1548699720000, y: 300 },
            { x: 1548700020000, y: 300 },
            { x: 1548700320000, y: 300 },
            { x: 1548700620000, y: 300 },
            { x: 1548700920000, y: 77 },
          ],
          downSeries: [
            { x: 1548697620000, y: 293 },
            { x: 1548697920000, y: 300 },
            { x: 1548698220000, y: 155 },
            { x: 1548698520000, y: null },
            { x: 1548698820000, y: null },
            { x: 1548699120000, y: null },
            { x: 1548699420000, y: null },
            { x: 1548699720000, y: null },
            { x: 1548700020000, y: null },
            { x: 1548700320000, y: null },
            { x: 1548700620000, y: null },
            { x: 1548700920000, y: null },
          ],
        },
      ],
    };
  });

  it('renders a monitor list without errors', () => {
    const { monitors } = monitorResult;
    const component = shallowWithIntl(
      <MonitorList
        primaryColor="green"
        dangerColor="red"
        loading={false}
        monitors={monitors || []}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
