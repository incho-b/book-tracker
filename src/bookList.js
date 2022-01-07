import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import Book from './components/Book';

const TTBKey = 'ttbhaggardjmf1043001';
const CATEGORY = 'BestSeller';
const OUTPUT = 'xml'; // xml, js
const VERSION = '20131101'; // 20131101, 20070901
const Aladin_URL = `https://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=${TTBKey}&QueryType=${CATEGORY}&MaxResults=10&start=1&SearchTarget=Book&output=${OUTPUT}&Version=${VERSION}`;
